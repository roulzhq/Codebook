import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { UtilService } from 'src/app/services/util.service';
import { WasmService } from 'src/app/services/wasm.service';

import { Codebook as cb } from 'src/app/models/Codebook';
import { ResizedEvent } from 'angular-resize-event';
import { take } from 'rxjs/operators';
import { WasmJsVM } from 'src/app/models/WASM';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent implements OnInit, OnDestroy {
  @Input() set data(data: cb.Cell) {
    // only update object if it changed;
    if (!this.utilService.compareObjects(data, this.originalCell)) {
      let cellCopy = this.utilService.cloneObject(data);

      this.cell = cellCopy;
      this.originalCell = data;

      this.pendingChanges = false;
    }
  }

  @Input() private vm: WasmJsVM;

  @Output() dataChange: EventEmitter<cb.Cell> = new EventEmitter<cb.Cell>();

  // Used to store all modifications to the cell made within this component.
  // It will be pushed to firebase periodically, when changes are detected.
  public cell: cb.Cell;

  // The cell's state at the point of the last update.
  // Used to check for changes within the cell.
  private originalCell: cb.Cell;

  // The interval ID for the changes listener. Used to clear the interval on component destroy
  private saveChangesInterval: number;
  // The interval ID for the execution listener.
  private executionInterval: number;

  // A threshold used to determine if the "save" function should be executed.
  // If the distance since the last edit and the time when the save function was executed is below
  // this threshold, the save function will not be executed.
  private editThreshold: number = 1000;
  // How often the save function should be called automatically.
  private editTimer: number = 2000;
  // How often the cell content is executed
  public executeTimer: number = 500;

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
    language: 'javascript', // this.data?.type || 'text',
    automaticLayout: true,
  };

  // The executed cell output
  public output: string = null;

  constructor(private utilService: UtilService, private wasm: WasmService) {}

  public ngOnInit(): void {
    this.wasm.ready.pipe(take(2)).subscribe((ready) => {
      if (ready) {
        this.execute();
      }
    });

    this.saveChangesInterval = setInterval(() => {
      if (this.cellChanged) {
        this.saveChanges();
      }
    }, this.editTimer);

    this.executionInterval = setInterval(() => {
      if (this.cellChanged) {
        this.execute();
      }
    }, this.executeTimer);
  }

  public ngOnDestroy(): void {
    clearInterval(this.saveChangesInterval);
    clearInterval(this.executionInterval);
  }

  public get cellChanged(): boolean {
    return !this.utilService.compareObjects(this.originalCell, this.cell);
  }

  /**
   * Needs to be called when changing some cell property.
   * It's used to make sure the save mechanism is working correctly
   */
  public registerCellChange() {
    this.pendingChanges = true;
    this.lastEdit = new Date().getTime();
  }

  /**
   * The first function called on cell content changed.
   * Updates the internal cellContent
   */
  public onCellContentChanged(content: string) {
    // Push the update into the local cell, so it can be saved
    this.cell.data = content;
    this.registerCellChange();
  }

  /**
   * Called when the cell was resized.
   */
  public onCellResize(event: ResizedEvent) {
    // Trigger only if there was an "oldHeight".
    // Used to prevent this function from being called when the cells are not properly rendered yet.
    if (event.oldHeight) {
      if (event.newHeight != event.oldHeight) {
        window.dispatchEvent(new Event('resize'));
        this.cell.height = event.newHeight;

        this.registerCellChange();
      }
    }
  }

  /**
   * Called periodically to save any changes made to firebase.
   * It's done like this to prevent pushing changes to often to firebase
   * (For example on every resize).
   */
  public saveChanges() {
    // Determine the time difference between the last eddit and now
    let timeDifference = (new Date().getTime() - this.lastEdit) | 0;

    // The data is not saved if the time difference is smaller then the threshold
    // To avoid saving the data while the user is still typing something.
    if (timeDifference > this.editThreshold || this.lastEdit == null) {
      // If so, update the data.
      this.dataChange.emit(this.cell);
      console.log('Saving changes...');
    }
  }

  public execute() {
    this.output = this.vm.execute(this.cell.data)
  }
}
