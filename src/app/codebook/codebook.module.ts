import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AngularResizedEventModule } from 'angular-resize-event';

// Views
import { CodebookListComponent } from './views/codebook-list/codebook-list.component';
import { CodebookDetailComponent } from './views/codebook-detail/codebook-detail.component';
import { CodebookCellComponent } from './components/codebook-cell/codebook-cell.component';

// Components
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CodebookListComponent,
    CodebookDetailComponent,
    CodebookCellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // External modules
    MonacoEditorModule.forRoot(),
    AngularResizedEventModule,

    // Components
    SharedModule,
  ],
})
export class CodebookModule {}
