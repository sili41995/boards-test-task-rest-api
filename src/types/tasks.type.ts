import { Request } from 'express';
import { SavedUser } from './auth.type';
import { Task } from '@prisma/client';
import { IMutateByIdProps } from './funcs.type';

export interface ITaskRequest extends Request {
  user?: SavedUser;
  boardId?: number;
}

export type Tasks = Pick<Task, 'title' | 'id' | 'status'>[];

export type NewTask = Omit<Task, 'id' | 'ownerId'>;

export interface IGetAllTasksProps {
  boardId: number;
  ownerId: number;
}

export interface IAddNewTaskProps {
  newTask: NewTask;
  ownerId: number;
}

export interface IUpdateByIdTaskProps extends IMutateByIdProps {
  data: Partial<NewTask>;
}
