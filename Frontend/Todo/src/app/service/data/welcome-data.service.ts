import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorld {
  constructor(public msg: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private httpClient: HttpClient) {}

  executeHiService() {
    return this.httpClient.get<HelloWorld>('http://localhost:8080/hello');
  }
}
