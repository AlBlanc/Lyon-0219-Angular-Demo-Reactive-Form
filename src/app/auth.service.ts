import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './api.service';
import { tap, map } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtToken: string = undefined;

  constructor(private apiService: APIService) { }

  login(username: string, password: string): Observable<User>{
    return this.apiService.login(username, password).pipe(tap(response => {
      this.jwtToken = response.token
      console.log("Connected with token "+response.token)
    }),
    map( response => response.user));
  }

  isLoggedIn(): boolean {
    return this.jwtToken != undefined
  }

  getToken(): string {
    return this.jwtToken;
  }
}
