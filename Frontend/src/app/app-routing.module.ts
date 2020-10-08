import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Views
import { IndexView } from './views/index/index.component';

const routes: Routes = [
  {path: "", component: IndexView, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
