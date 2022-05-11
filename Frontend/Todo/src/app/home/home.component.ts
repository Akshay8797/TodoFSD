import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HelloWorld,
  WelcomeDataService,
} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string = 'Welcome';
  name: string = '';
  serviceMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMsg(): void {
    this.welcomeDataService.executeHiService().subscribe({
      next: (response) => this.handleHelloResponse(response),
      error: (error) => this.handleErrorResponse(error),
    });
  }
  handleHelloResponse(response: HelloWorld) {
    this.serviceMessage = response.msg;
  }
  handleErrorResponse(error: any) {
    this.serviceMessage = error.error.message;
  }

  getWelcomeMsgWithParam(): void {
    this.welcomeDataService.executeHiServiceWithPath(this.name).subscribe({
      next: (response) => this.handleHelloResponse(response),
      error: (error) => this.handleErrorResponse(error),
    });
  }
}
