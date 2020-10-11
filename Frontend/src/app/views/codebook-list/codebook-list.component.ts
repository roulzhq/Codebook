import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { CodebookService } from '../../services/codebook.service';

@Component({
  selector: 'codebook-list-view',
  templateUrl: './codebook-list.component.html',
  styleUrls: ['./codebook-list.component.scss'],
})
export class CodebookListView implements OnInit {
  public codebooks = this.codebookService.codebooks;

  constructor(public codebookService: CodebookService) {
    this.codebooks.pipe(take(1)).subscribe(codebooks => console.log(codebooks))
  }

  ngOnInit(): void {}
}
