import { Controller, Get, UseGuards } from '@nestjs/common';

import { PrismaService } from '../database/prisma/prisma.service';
import { AuthorizationGuard } from './auth/authorization.guard';

@Controller()
export class TaskController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @UseGuards(AuthorizationGuard)
  tasks() {
    return this.prisma.task.findMany();
  }
}
