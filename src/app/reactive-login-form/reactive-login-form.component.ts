import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Credentials } from '../models/credentials';
import { wildEmailValidator } from '../validators/wildEmail';
import { wildPasswordValidator } from '../validators/passwordValidator';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.scss']
})
export class ReactiveLoginFormComponent implements OnInit {

  credentials: FormGroup;

  values: Credentials;

  constructor(private fb: FormBuilder) {
      
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      login: ['', [Validators.required, Validators.email, wildEmailValidator]],
      password: ['' , [Validators.required, wildPasswordValidator, Validators.minLength(8)]]
    })

    this.credentials.valueChanges.subscribe(credentials => {
      this.values = credentials
    })
  }

  login() {

    this.values = this.credentials.value;

    if (!this.values.login.endsWith('@wild.school')) {
      alert(`Email invalid ${this.values.login}`)
    } else {
      alert(`Je me connecte ${this.values.login} ${this.values.password}`)
    }
  }
}
