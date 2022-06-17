import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

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

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async createTask(task: Task) {
    return this.prisma.task.create({
      data: { ...task },
    });
  }

  async completeTask(id: string) {
    return this.prisma.task.update({
      where: { id },
      data: {
        status: true,
      },
    });
  }

  async uncompleteTask(id: string) {
    return this.prisma.task.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }

  async removeTask(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
