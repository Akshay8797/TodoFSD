import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private router: Router, private todoService: TodoDataService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.todoService.retrieveAllTodos('Akshay8797').subscribe({
      next: (response) => (this.todos = response),
      error: (error) => this.router.navigate(['error']),
    });
  }

  deleteSuccess: string = '';
  deleteFailed: string = '';
  deleteTodo(id: number): void {
    this.todoService.deleteTodo('Akshay8797', id).subscribe({
      next: (response) => (
        (this.deleteSuccess = `Todo ${id} deleted successfully!`),
        this.getAllTodos()
      ),
      error: (error) =>
        (this.deleteFailed = `Unable to delete Todo ${id}, Please try later!`),
    });
  }

  updateTodo(id: number): void {
    this.router.navigate(['todo', id])
  }
}
