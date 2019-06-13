import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Credentials } from '../models/credentials';
import { wildEmailValidator } from '../validators/wildEmail';
import { wildPasswordValidator } from '../validators/passwordValidator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.scss']
})
export class ReactiveLoginFormComponent implements OnInit {

  credentials: FormGroup;

  values: Credentials;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.credentials = this.fb.group({
      login: [''],
      password: ['']
    })
  }

  login() {

    this.values = this.credentials.value;
    this.authService.login(this.values.login, this.values.password).subscribe(user => {
      console.log(user);
      this.router.navigate(['/home']);
    })
  }
}
