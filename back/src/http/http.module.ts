import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database/database.module';
import { TaskController } from './task.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TaskController],
  providers: [TasksService],
})
export class HttpModule {}
