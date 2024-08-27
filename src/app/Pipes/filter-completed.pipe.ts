import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Models/todo';

@Pipe({
  name: 'filterCompleted',
  standalone: true,
})
export class FilterCompletedPipe implements PipeTransform {
  transform(todos: Todo[], hideCompletedTask: boolean): Todo[] {
    if (hideCompletedTask) {
      return todos.filter((todo) => todo.status !== 'completed');
    }
    return todos;
  }
}
