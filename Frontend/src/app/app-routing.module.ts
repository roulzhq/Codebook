import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Views
import { IndexView } from './views/index/index.component';
import { AboutView } from './views/about/about.component';

const routes: Routes = [
  {path: "", component: IndexView, pathMatch: "full"},
  {path: "about", component: AboutView}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
