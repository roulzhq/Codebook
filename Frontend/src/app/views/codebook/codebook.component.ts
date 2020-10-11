import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { CodebookService } from 'src/app/services/codebook.service';

import { Codebook as cb } from '../../models/Codebook';

@Component({
  selector: 'codebook-view',
  templateUrl: './codebook.component.html',
  styleUrls: ['./codebook.component.scss'],
})
export class CodebookView implements OnInit, OnDestroy {
  public codebook: Observable<cb.Codebook>;

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

      this.codebook = this.codebookService.getCodebookAsObservable(id);
    });
  }

  ngOnInit(): void {}
}
