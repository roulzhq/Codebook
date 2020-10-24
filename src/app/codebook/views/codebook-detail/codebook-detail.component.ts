import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CodebookService } from 'src/app/services/codebook.service';

import { Codebook as cb } from '../../../models/Codebook';

@Component({
  selector: 'app-codebook-detail',
  templateUrl: './codebook-detail.component.html',
  styleUrls: ['./codebook-detail.component.scss']
})
export class CodebookDetailComponent implements OnInit {
  public codebook$: Observable<cb.Codebook>;
  public cells$: Observable<cb.Cell[]>;

  public codebookId: string;

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

    this.codebook$.pipe(take(1)).subscribe((codebook) => {
      this.codebookId = codebook.id;
    });
  }

  ngOnInit(): void {
    this.cells$.pipe(take(3)).subscribe((cells) => console.log(cells));
  }

  public onCellDataChanged(newCell: cb.Cell, cellId: string) {
    this.codebookService.updateCodebookCell(this.codebookId, cellId, newCell);
  }

  /**
   * This function is used to help angular track changes in the cell loop.
   * It's not a big performance boost, but it prevents the cells from being re-rendered.
   * That is needed to let the cursor stay at it's place inside the monaco editor.
   */
  public codebookTrackByFunction(index, item) {
    return item ? item.id : undefined;
  }
}