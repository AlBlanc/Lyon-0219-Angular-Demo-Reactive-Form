import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenLoginFormComponent } from './template-driven-login-form/template-driven-login-form.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WildEmailDirective } from './validators/wildEmail';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenLoginFormComponent,
    ReactiveLoginFormComponent,
    LoginComponent,
    WildEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
