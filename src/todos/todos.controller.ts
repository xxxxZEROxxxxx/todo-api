import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.module';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): Todo {
    return this.todosService.create(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const result = this.todosService.delete(+id);
    return { success: result };
  }
}
