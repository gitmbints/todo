import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [AddTodoComponent, TodoItemComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isTasksHidden: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onDeleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  onUpdateTodo(id: string, updates: Partial<Todo>): void {
    this.todoService.updateTodo(id, updates);
    this.todos = this.todoService.getTodos();
  }

  hideCompletedTask() {
    if (this.isTasksHidden) {
      this.todos = this.todos.filter((todo) => todo.status !== 'completed');
    } else {
      this.todos = this.todoService.getTodos();
    }
  }
}
