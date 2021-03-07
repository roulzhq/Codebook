import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { WasmService } from 'src/app/services/wasm.service';

import { CodebookService } from 'src/app/services/codebook.service';

import { Codebook as cb } from '../../../models/Codebook';
import { WasmJsVM } from 'src/app/models/WASM';

@Component({
  selector: 'codebook-detail',
  templateUrl: './codebook-detail.component.html',
  styleUrls: ['./codebook-detail.component.scss'],
})
export class CodebookDetailComponent implements OnDestroy {
  public codebook$: Observable<cb.Codebook>;
  public codebook: cb.Codebook = null;
  public cells$: Observable<(cb.Cell)[]>;

  public vm: WasmJsVM;

  public codebookId: string;

  private routeParamsSubscription: Subscription;

  public titleEditModeActive: boolean = false;
  public titleEditText: string = '';

  public subscriptions: Subscription = new Subscription();

  public faEdit = faEdit;

  constructor(
    private route: ActivatedRoute,
    private codebookService: CodebookService,
    private wasm: WasmService
  ) {
    this.wasm.ready.pipe(take(2)).subscribe((ready) => {
      if (ready) {
        this.vm = this.wasm.register();
      }
    });

    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      const id = params['id'];

      this.codebook$ = this.codebookService.getCodebookAsObservable(id);
      this.cells$ = this.codebookService.getCodebookCellsObservable(id);
    });

    this.codebook$.pipe(take(1)).subscribe((codebook) => {
      this.codebookId = codebook.id;
      this.titleEditText = codebook.title;
      this.codebook = codebook;
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    this.subscriptions.unsubscribe();
  }

  public onCellDataChanged(newCell: cb.Cell, cellId: string) {
    this.codebookService.updateCodebookCell(this.codebookId, cellId, newCell);

    return this.vm.execute(newCell.data);
  }

  public onTitleEditChange(newTitle: string) {
    this.codebookService.updateCodebookTitle(this.codebookId, newTitle);
  }

  /**
   * This function is used to help angular track changes in the cell loop.
   * It's not a big performance boost, but it prevents the cells from being re-rendered.
   * That is needed to let the cursor stay at it's place inside the monaco editor.
   */
  public codebookTrackByFunction(index, item) {
    return item ? item.id : undefined;
  }

  public onTitleEditButtonClick() {
    if (this.titleEditText != this.codebook.title) {
      this.onTitleEditChange(this.titleEditText);
    }

    this.titleEditModeActive = !this.titleEditModeActive;
  }
}
