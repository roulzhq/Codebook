import { Component, OnInit } from '@angular/core';

import { CodebookService } from 'src/app/services/codebook.service';

@Component({
  selector: 'app-codebook-list',
  templateUrl: './codebook-list.component.html',
  styleUrls: ['./codebook-list.component.scss'],
})
export class CodebookListComponent implements OnInit {
  public codebooks = this.codebookService.codebooks;

  constructor(public codebookService: CodebookService) {}

  ngOnInit(): void {}
}
