import { Component, OnDestroy, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  public loggedIn = false;

  public faUser = faUser;
  public faCogs = faCogs;
  public faSignOutAlt = faSignOutAlt;

  constructor(private authService: AuthService) {
    this.subscriptions.add(this.authService.user.subscribe((user) => {
      this.loggedIn = user !== null;
    }));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public logout() {
    this.authService.logout();
  }
}
