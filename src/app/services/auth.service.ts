import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:3000';

  httpClient = inject(HttpClient);

  register(email:string, password: string): Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(`${this.authURL}/register`, {email, password});
  }

  login(email:string, password: string): Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(`${this.authURL}/login`, {email, password});
  }
  
}
