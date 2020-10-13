import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';
import { CodebookService } from 'src/app/services/codebook.service';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-view',
  templateUrl: './codebook.component.html',
  styleUrls: ['./codebook.component.scss'],
})
export class CodebookView implements OnInit, OnDestroy {
  public codebook$: Observable<cb.Codebook>;
  public cells$: Observable<cb.Cell[]>;

  private routeParamsSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private codebookService: CodebookService
  ) {
    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      const id = params['id'];

      this.codebook$ = this.codebookService.getCodebookAsObservable(id);
      this.cells$ = this.codebookService.getCodebookCellsObservable(id);
    });
  }

  ngOnInit(): void {
    this.cells$.pipe(take(3)).subscribe((cells) => console.log(cells));
  }
}
