import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',     // غيّر حسب إعداداتك
      password: '1111',         // غيّر حسب إعداداتك
      database: 'todo_api',     // تأكد أن قاعدة البيانات موجودة
      entities: [Todo],
      synchronize: true,        // لا تفعّلها في الإنتاج
    }),
    TodosModule,
  ],
})
export class AppModule {}


