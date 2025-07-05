import { Injectable } from '@nestjs/common';
import { Todo } from './todos.module';


@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: Todo): Todo {
    todo.id = Date.now();
    this.todos.push(todo);
    return todo;
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }
}
