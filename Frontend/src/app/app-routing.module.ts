import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Views
import { IndexView } from './views/index/index.component';
import { CodebookListView } from './views/codebook-list/codebook-list.component';
import { CodebookView } from './views/codebook/codebook.component';
import { AuthView } from './views/auth/auth.component';

const routes: Routes = [
  { path: '', component: IndexView, pathMatch: 'full' },
  { path: 'codebook/:id', component: CodebookView },
  { path: 'codebooks', component: CodebookListView },

  { path: 'auth', component: AuthView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
