import { Component, Input, OnInit } from '@angular/core';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent implements OnInit {
  @Input('data') cell: cb.Cell = null;

  public content: string = '';

  public editorOptions = { theme: 'vs-dark', language: 'javascript' };

  constructor() {}

  ngOnInit(): void {
    this.content = this.cell.lines.join('\n ');
  }
}
