import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // جلب جميع المهام
  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  // جلب مهمة واحدة
  @Get(':id')
  async findById(@Param('id') id: number): Promise<Todo | null> {
    return this.todosService.findById(id);
  }

  // إنشاء مهمة جديدة
  @Post()
  async create(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todosService.create(todoData);
  }

  // تعديل مهمة
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedTodo: Partial<Todo>
  ): Promise<Todo | null> {
    return this.todosService.update(id, updatedTodo);
  }

  // حذف مهمة
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ success: boolean }> {
    const success = await this.todosService.delete(id);
    return { success };
  }
}
