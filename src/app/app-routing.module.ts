import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

// Views
import { IndexView } from './views/index/index.component';
import { CodebookListComponent } from './codebook/views/codebook-list/codebook-list.component';
import { CodebookDetailComponent } from './codebook/views/codebook-detail/codebook-detail.component';
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
    component: CodebookListComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth },
  },
  {
    path: 'codebooks/:id',
    component: CodebookDetailComponent,
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
