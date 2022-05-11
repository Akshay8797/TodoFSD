import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoDataService) {}

  ngOnInit(): void {}

  id: number = 0;
  saveSuccess: string = '';
  saveFailed: string = '';
  handleSave(): void {
    this.todoService.retrieveTodo('Akshay8797', this.id).subscribe({
      next: (response) => (this.saveSuccess = 'Todo saved successfully!'),
      error: (error) =>
        (this.saveFailed = 'Unable to save Todo, Please try later!'),
    });
  }
}
