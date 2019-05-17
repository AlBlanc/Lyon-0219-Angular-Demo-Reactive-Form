import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-template-driven-login-form',
  templateUrl: './template-driven-login-form.component.html',
  styleUrls: ['./template-driven-login-form.component.scss']
})
export class TemplateDrivenLoginFormComponent implements OnInit {

  credentials = new Credentials();

  constructor() { }

  ngOnInit() {
  }

  login() {
    if (!this.credentials.login.endsWith('@wild.school')) {
      alert(`Email invalid ${this.credentials.login}`)
    } else {
      alert(`Je me connecte ${this.credentials.login} ${this.credentials.password}`)
    }
  }

}
