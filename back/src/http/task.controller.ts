import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AuthorizationGuard } from './auth/authorization.guard';
import { TasksService } from './tasks.service';

type SubTask = {
  id: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  mainTaskId?: string;
};

type Task = {
  subTasks: SubTask[];
  id: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  @UseGuards(AuthorizationGuard)
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  @UseGuards(AuthorizationGuard)
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: Task) {
    return this.taskService.createTask(task);
  }

  @Patch('/complete/:id')
  async completeTask(@Param('id') taskId: string) {
    return this.taskService.completeTask(taskId);
  }

  @Patch('/uncomplete/:id')
  async uncompleteTask(@Param('id') taskId: string) {
    return this.taskService.uncompleteTask(taskId);
  }

  @Delete(':id')
  async removeTask(@Param('id') taskId: string) {
    return this.taskService.removeTask(taskId);
  }
}
