import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

interface LoginResponsePayload {
  token : string;
  user : User
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private static readonly API_HOSTNAME = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponsePayload>{
    return this.http.post<LoginResponsePayload>(`${APIService.API_HOSTNAME}/login`, {login: username, password: password});
  }

  getCurrentUser(): Observable<User>{
    return this.http.get<User>(`${APIService.API_HOSTNAME}/user/current`)
  }
}
