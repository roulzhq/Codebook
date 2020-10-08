import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-view',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthView implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public async onLoginSubmit() {
    let form = this.loginForm.value;

    let res = await this.authService.signInWithEmailAndPassword(
      form.email,
      form.password
    );

    console.log(res);
  }
}
