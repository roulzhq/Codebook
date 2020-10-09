import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<firebase.User> = this.auth.user;
  private _currentUser: firebase.User = null;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user.subscribe((user) => {
      this._currentUser = user;
    });
  }

  public get currentUser(): firebase.User {
    return this._currentUser;
  }

  public async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    if (!this.currentUser) {
      return this.auth.signInWithEmailAndPassword(email, password);
    }
  }

  public logout(): Promise<void> {
    return this.auth.signOut().then((_) => {
      this.router.navigateByUrl('');
      window.location.reload();
    });
  }
}
