import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  // جلب جميع المهام
  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  // إنشاء مهمة جديدة
  async create(todoData: Partial<Todo>): Promise<Todo> {
    const todo = this.todoRepository.create(todoData);
    return this.todoRepository.save(todo);
  }

  // حذف مهمة حسب ID
  async delete(id: number): Promise<boolean> {
    const result = await this.todoRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }

  // تعديل مهمة حسب ID
  async update(id: number, updatedTodo: Partial<Todo>): Promise<Todo | null> {
    await this.todoRepository.update(id, updatedTodo);
    return this.todoRepository.findOneBy({ id });
  }

  // جلب مهمة واحدة حسب ID
  async findById(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({ id });
  }
}
