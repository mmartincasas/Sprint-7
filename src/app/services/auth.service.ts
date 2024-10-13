import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:3000';
  private tokenKey = '';
  redirectUrl: string | null = null;

  httpClient = inject(HttpClient);

  register(email:string, password: string): Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(`${this.authURL}/register`, {email, password});
  }

  login(email:string, password: string): Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(`${this.authURL}/login`, {email, password});
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token); 
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.tokenKey); 
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); 
  }
  
}
