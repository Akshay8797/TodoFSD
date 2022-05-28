import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiUrl } from './app.costants';

export const AuthUser = 'authUser';
export const AuthToken = 'authToken';

export class Token {
  constructor(public token: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  executeJwtAuthService(username: string, password: string) {
    return this.httpClient
      .post<Token>(`${apiUrl}/authenticate`, { username, password })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AuthUser, username);
          sessionStorage.setItem(AuthToken, `Bearer ${data.token}`);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AuthUser);
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(AuthToken);
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AuthUser);
    return user != null;
  }

  logout(): void {
    sessionStorage.removeItem(AuthUser);
    sessionStorage.removeItem(AuthToken);
  }
}
