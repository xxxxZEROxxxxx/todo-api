import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
export class Todo {
  id: number;
  title: string;
  completed: boolean;
}
