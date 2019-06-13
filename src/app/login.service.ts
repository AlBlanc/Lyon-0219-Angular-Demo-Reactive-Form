import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string): Observable<string>{
    console.log(`Login ${username} Password ${password}`);
    return of(username);
    // return Observable.create(() => username == 'omar@wild.school' && password == 'totototo' ? username : '');
  }
}
