import { Injectable } from '@angular/core';
import { Priority, Todo } from '../Models/todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.loadTodosFromLocalStorage();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string, priority: Priority = 'medium'): void {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      priority,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(newTodo);
    this.saveTodosToLocalStorage();
  }

  updateTodo(id: string, updates: Partial<Todo>): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      Object.assign(todo, updates, { updatedAt: new Date() });
      this.saveTodosToLocalStorage();
    }
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodosToLocalStorage();
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadTodosFromLocalStorage(): void {
    const todosJson = localStorage.getItem('todos');

    if (todosJson) {
      this.todos = JSON.parse(todosJson);
    }
  }
}
