import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<Partial<Todo>>();

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onUpdateStatus(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newStatus: Todo['status'] = inputElement.checked
      ? 'completed'
      : 'pending';
    this.update.emit({ status: newStatus });
  }
}
