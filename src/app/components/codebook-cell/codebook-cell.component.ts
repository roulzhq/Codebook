import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent implements OnInit {
  @Input() data: cb.Cell = null;
  @Output() dataChange: EventEmitter<cb.Cell> = new EventEmitter<
    cb.Cell
  >();

  public cellContent: string = '';

  private _editorOptions: any = {};

  constructor() {
    this._editorOptions.theme = 'vs';
    this._editorOptions.language = this.data?.type || 'text';
  }

  ngOnInit(): void {
    this.cellContent = this.data?.lines.join('\n');
  }

  public get editorOptions() {
    return this._editorOptions;
  }

  public onCellContentChanged(content: string) {
    const lines = content.split('\n');

    this.dataChange.emit({
      ...this.data,
      lines,
    });
  }
}
