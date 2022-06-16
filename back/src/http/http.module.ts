import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database/database.module';
import { TaskController } from './task.controller';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TaskController],
})
export class HttpModule {}
