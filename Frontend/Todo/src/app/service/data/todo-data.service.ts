import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { apiUrl } from '../app.costants';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private httpClient: HttpClient) {}

  retrieveAllTodos(name: string) {
    return this.httpClient.get<Todo[]>(`${apiUrl}/users/${name}/todos`);
  }

  deleteTodo(name: string, id: number) {
    return this.httpClient.delete(`${apiUrl}/users/${name}/todos/${id}`);
  }

  retrieveTodo(name: string, id: number) {
    return this.httpClient.get<Todo>(`${apiUrl}/users/${name}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put(`${apiUrl}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(`${apiUrl}/users/${username}/todos`, todo);
  }
}
