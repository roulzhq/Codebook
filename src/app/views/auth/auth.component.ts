import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';

import { FirebaseError } from 'firebase';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-view',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthView implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });

  public loggingIn: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.authService.user.pipe(take(1)).subscribe((user) => {
      if (user && !this.loggingIn) {
        this.router.navigateByUrl('');
        this.toastr.info('Already logged in!');
      }
    });
  }

  ngOnInit(): void {}

  public async onLoginSubmit() {
    let form = this.loginForm.value;

    this.loggingIn = true;

    try {
      let res = await this.authService.loginWithEmailAndPassword(
        form.email,
        form.password
      );

      if (res) {
        this.router.navigateByUrl('');
        this.loggingIn = false;
      }
    } catch (_err) {
      // Typescript does not let us type the error inside the catch.
      // Called _err to make it clear not to use this one.
      let error = _err as FirebaseError;

      this.toastr.error('Please try again!', 'Login unsuccessfull.');
      this.loginForm.reset();
    }
  }
}
