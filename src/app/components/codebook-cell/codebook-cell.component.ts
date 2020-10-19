import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UtilService } from '../../services/util.service';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent {
  @Input() set data(data: cb.Cell) {
    // only update object if it changed;
    if (!this.utilService.compareObjects(data, this.cell)) {
      this.cell = data;
    }
  }

  @Output() dataChange: EventEmitter<cb.Cell> = new EventEmitter<cb.Cell>();

  public cell: cb.Cell;

  private lastEdit: number = null;
  private editThreshold: number = 1000;

  private _editorOptions: any = {
    Render
  };

  constructor(private utilService: UtilService) {
    this._editorOptions.theme = 'vs';
    this._editorOptions.language = this.data?.type || 'text';
  }

  public get editorOptions() {
    return this._editorOptions;
  }

  public get cellContent(): string {
    return this.cell.lines.join('\n');
  }

  public onCellContentChanged(content: string) {
    const lines = content.split('\n');

    let timeDifference = (new Date().getTime() - this.lastEdit) | 0;

    // Only trigger update if the last update was before the defined threshold
    // Or the cell was never updated
    if (timeDifference > this.editThreshold || this.lastEdit == null) {
      this.lastEdit = new Date().getTime();

      this.dataChange.emit({
        ...this.data,
        lines,
      });
    }
  }
}
