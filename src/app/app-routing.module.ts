import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

// Views
import { IndexView } from './views/index/index.component';
import { CodebookListView } from './views/codebook-list/codebook-list.component';
import { CodebookView } from './views/codebook/codebook.component';
import { AuthView } from './views/auth/auth.component';

const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    component: IndexView,
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
  },

  {
    path: 'codebooks',
    component: CodebookListView,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
  },
  {
    path: 'codebooks/:id',
    component: CodebookView,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
  },

  {
    path: 'auth',
    component: AuthView,
    data: { authGuardPipe: redirectLoggedInToHome },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
