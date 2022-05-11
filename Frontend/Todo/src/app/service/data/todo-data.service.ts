import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private httpClient: HttpClient) {}

  retrieveAllTodos(name: string) {
    return this.httpClient.get<Todo[]>(
      `http://localhost:8080/users/${name}/todos`
    );
  }

  deleteTodo(name: string, id: number) {
    return this.httpClient.delete<Todo>(
      `http://localhost:8080/users/${name}/todos/${id}`
    );
  }

  retrieveTodo(name: string, id: number) {
    return this.httpClient.get<Todo>(
      `http://localhost:8080/users/${name}/todo/${id}`
    );
  }
}
