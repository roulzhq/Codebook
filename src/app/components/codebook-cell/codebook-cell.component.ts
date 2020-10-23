import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { UtilService } from '../../services/util.service';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent implements OnInit, OnChanges, OnDestroy {
  @Input() set data(data: cb.Cell) {
    // only update object if it changed;
    if (!this.utilService.compareObjects(data, this.cell)) {
      this.cell = data;
      this.pendingChanges = false;
    }
  }

  @Output() dataChange: EventEmitter<cb.Cell> = new EventEmitter<cb.Cell>();

  public cell: cb.Cell;

  public cellContent: string;

  // The interval ID for the changes listener. Used to clear the interval on component destroy
  private saveChangesInterval: number;

  // A threshold used to determine if the "save" function should be executed.
  // If the distance since the last edit and the time when the save function was executed is below
  // this threshold, the save function will not be executed.
  private editThreshold: number = 1000;
  // This stores the time of the last edit
  private lastEdit: number = null;

  // True if there are unsaved changes, false otherwise.
  public pendingChanges: boolean = false;

  // Options for the Monaco editor
  public editorOptions: any = {
    minimap: {
      enabled: false,
    },
    theme: 'vs',
    language: this.data?.type || 'text',
  };

  constructor(private utilService: UtilService) {}

  public ngOnInit(): void {
    this.saveChangesInterval = setInterval(this.saveChanges.bind(this), 1000);
  }

  public ngOnChanges(): void {
    const newContent = this.cell.lines.join('\n');

    // Only update the current cell content if it's different from the new one.
    // This avoids unnecessary updates, espesially because updates will reset
    // The cursor position within the monaco editor
    if (!this.utilService.compareObjects(newContent, this.cell.lines)) {
      this.cellContent = newContent;
    }
  }

  public ngOnDestroy(): void {
    clearInterval(this.saveChangesInterval);
  }

  public onCellContentChanged(content: string) {
    this.cellContent = content;
    this.pendingChanges = true;
    this.lastEdit = new Date().getTime();
  }

  public saveChanges() {
    // Determine the time difference between the last eddit and now
    let timeDifference = (new Date().getTime() - this.lastEdit) | 0;

    // The data is not saved if the time difference is smaller then the threshold
    // To avoid saving the data while the user is still typing something.
    if (timeDifference > this.editThreshold || this.lastEdit == null) {
      let changedContent = this.cellContent.split('\n');

      // Only perform saving if there are changes.
      if (!this.utilService.compareObjects(changedContent, this.cell.lines)) {
        // If so, update the data.
        this.dataChange.emit({ ...this.cell, lines: changedContent });
        console.log('Saving changes...');
      }
    }
  }
}
