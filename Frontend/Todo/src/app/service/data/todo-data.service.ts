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
    return this.httpClient.delete(
      `http://localhost:8080/users/${name}/todos/${id}`
    );
  }

  retrieveTodo(name: string, id: number) {
    return this.httpClient.get<Todo>(
      `http://localhost:8080/users/${name}/todos/${id}`
    );
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
