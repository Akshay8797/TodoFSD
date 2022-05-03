import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  userName: string = 'Akshay8797'
  password: string = ''
  loginError: string = 'Invalid Credentials'
  invalidLogin: boolean = false
  handleLogin(): void {
    if (this.userName === 'Akshay8797' && this.password === '8797') {
      this.router.navigate(['home', this.userName]);
    } else {
      this.invalidLogin = true
    }
  }
}
