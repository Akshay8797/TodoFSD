import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo: Todo = new Todo(this.id, '', new Date(), false);
  saveFailed: string = '';
  formInvalid: string = 'Please enter valid values';

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.actiavtedRoute.snapshot.params['id'];
    if (this.id != 0) {
      this.todoService.retrieveTodo('Akshay8797', this.id).subscribe({
        next: (response) => (this.todo = response),
        error: (error) => this.router.navigate(['error']),
      });
    }
  }

  handleSave(): void {
    if (this.id == 0) {
      this.todoService.updateTodo('Akshay8797', this.id, this.todo).subscribe({
        next: (response) => this.router.navigate(['todos']),
        error: (error) =>
          (this.saveFailed = 'Unable to save Todo, Please try later!'),
      });
    } else {
      this.todoService.updateTodo('Akshay8797', this.id, this.todo).subscribe({
        next: (response) => this.router.navigate(['todos']),
        error: (error) =>
          (this.saveFailed = 'Unable to save Todo, Please try later!'),
      });
    }
  }
}
