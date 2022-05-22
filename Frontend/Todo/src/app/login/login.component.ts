import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  userName: string = '';
  password: string = '';
  loginError: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  handleLogin(): void {
    if (this.userName === 'Akshay8797' && this.password === '8797') {
      this.basicAuthenticationService
        .executeAuthService(this.userName, this.password)
        .subscribe({
          next: (response) => (
            (this.invalidLogin = false),
            this.router.navigate(['home', this.userName])
          ),
          error: (error) => (this.invalidLogin = true),
        });
    } else {
      this.invalidLogin = true;
    }
  }
}
