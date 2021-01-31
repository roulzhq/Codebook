import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AngularResizedEventModule } from 'angular-resize-event';

// Views
import { CodebookListComponent } from './views/codebook-list/codebook-list.component';
import { CodebookDetailComponent } from './views/codebook-detail/codebook-detail.component';
import { CodebookCellComponent } from './components/codebook-cell/codebook-cell.component';

// Components
import { SharedModule } from '../shared/shared.module';
import { CodebookSidemenuComponent } from './components/codebook-sidemenu/codebook-sidemenu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: {
    scrollBeyondLastLine: false,
  },
};

@NgModule({
  declarations: [
    CodebookListComponent,
    CodebookDetailComponent,
    CodebookCellComponent,
    CodebookSidemenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // External modules
    FontAwesomeModule,
    MonacoEditorModule.forRoot(monacoConfig),
    AngularResizedEventModule,

    // Components
    SharedModule,
  ],
})
export class CodebookModule {}
