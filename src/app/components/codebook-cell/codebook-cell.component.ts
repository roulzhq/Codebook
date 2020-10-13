import { Component, Input, OnInit } from '@angular/core';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-cell',
  templateUrl: './codebook-cell.component.html',
  styleUrls: ['./codebook-cell.component.scss'],
})
export class CodebookCellComponent implements OnInit {
  @Input('data') cell: cb.Cell = null;

  constructor() {}

  ngOnInit(): void {}
}
