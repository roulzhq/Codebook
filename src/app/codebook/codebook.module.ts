import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MonacoEditorModule } from 'ngx-monaco-editor';

// Views
import { CodebookListComponent } from './views/codebook-list/codebook-list.component';
import { CodebookDetailComponent } from './views/codebook-detail/codebook-detail.component';
import { CodebookCellComponent } from './components/codebook-cell/codebook-cell.component';

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
    MonacoEditorModule.forRoot(),
  ],
})
export class CodebookModule {}
