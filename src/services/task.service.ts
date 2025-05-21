import { Task } from '@prisma/client';
import prisma from '../prisma';
import { httpError } from '../utils';
import { Tasks, IAddNewTaskProps, IUpdateByIdTaskProps, IGetAllTasksProps } from '../types/tasks.type';
import { IMutateByIdProps } from '../types/funcs.type';

class TaskService {
  async getAll({ boardId, ownerId }: IGetAllTasksProps): Promise<Tasks> {
    const result = await prisma.task.findMany({
      where: { boardId, ownerId },
      select: {
        id: true,
        title: true,
        status: true,
      },
    });

    return result;
  }

  async getById({ id, ownerId }: IMutateByIdProps): Promise<Task> {
    const result = await prisma.task.findUnique({
      where: {
        id,
        ownerId,
      },
    });

    if (!result) {
      throw httpError({ status: 404 });
    }

    return result;
  }

  async add({ newTask, ownerId }: IAddNewTaskProps): Promise<Task> {
    const data = { ...newTask, ownerId };
    console.log(data);
    const result = await prisma.task.create({ data });

    return result;
  }

  async updateById({ data, id, ownerId }: IUpdateByIdTaskProps): Promise<Task> {
    const result = await prisma.task.update({
      where: {
        id,
        ownerId,
      },
      data,
    });

    return result;
  }

  async deleteById({ id, ownerId }: IMutateByIdProps): Promise<Task> {
    const result = await prisma.task.delete({
      where: {
        id,
        ownerId,
      },
    });

    return result;
  }
}

export default TaskService;
