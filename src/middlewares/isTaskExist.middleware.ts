import { Response, Request, NextFunction } from 'express';
import { httpError } from '../utils';
import { Endpoints } from '../constants';
import prisma from '../prisma';
import ctrlWrapper from './ctrlWrapper.middleware';

const isTaskExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const dynamicId = req.params[Endpoints.dynamicId];
  const id = Number(dynamicId);

  const result = await prisma.task.findUnique({ where: { id } });

  if (!result) {
    throw httpError({ status: 404 });
  }

  next();
};

export default ctrlWrapper(isTaskExist);
