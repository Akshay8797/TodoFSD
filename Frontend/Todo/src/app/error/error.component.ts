import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage =
    'An error occured! The page you are looking for is unavailable...';
  errorContact = 'Need more help? Contact support at';
  errorMail = 'support@todomanagement.in';
  constructor() {}

  ngOnInit(): void {}
}
