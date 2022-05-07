import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}
  authenticate(userName: string, password: string) {
    if (userName === 'Akshay8797' && password === '8797') {
      sessionStorage.setItem('authenticatedUser', userName)
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return (user != null)
  }

  logout() : void {
    sessionStorage.removeItem('authenticatedUser')
  }
}
