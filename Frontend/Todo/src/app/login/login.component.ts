import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  userName: string = 'Akshay8797';
  password: string = '';
  loginError: string = 'Invalid Credentials';
  invalidLogin: boolean = false;
  handleLogin(): void {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.userName,
        this.password
      )
    ) {
      this.router.navigate(['home', this.userName]);
    } else {
      this.invalidLogin = true;
    }
  }
}
