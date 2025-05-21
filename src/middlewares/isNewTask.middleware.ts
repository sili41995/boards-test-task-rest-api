import { Response, Request, NextFunction } from 'express';
import { httpError } from '../utils';
import { ErrorMessages } from '../constants';
import prisma from '../prisma';
import ctrlWrapper from './ctrlWrapper.middleware';

const isNewTask = async ({ body: { title } }: Request, res: Response, next: NextFunction): Promise<void> => {
  const result = await prisma.task.findUnique({ where: { title } });

  if (result) {
    throw httpError({
      status: 409,
      message: ErrorMessages.duplicateTask,
    });
  }

  next();
};

export default ctrlWrapper(isNewTask);
