import { Injectable } from '@angular/core';
import { Priority, Todo } from '../Models/todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

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
  }

  updateTodo(id: string, updates: Partial<Todo>): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      Object.assign(todo, updates, { updatedAt: new Date() });
    }
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
