import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  username: string = '';
  password: string = '';
  loginError: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  handleLogin(): void {
    this.authenticationService
      .executeJwtAuthService(this.username, this.password)
      .subscribe({
        next: (response) => (
          (this.invalidLogin = false),
          this.router.navigate(['home', this.username])
        ),
        error: (error) => (this.invalidLogin = true),
      });
  }
}
