import { Response, Request, NextFunction } from 'express';
import { httpError } from '../utils';
import { ErrorMessages } from '../constants';
import prisma from '../prisma';
import ctrlWrapper from './ctrlWrapper.middleware';

const isNewBoard = async ({ body: { title } }: Request, res: Response, next: NextFunction): Promise<void> => {
  const result = await prisma.board.findUnique({ where: { title } });

  if (result) {
    throw httpError({
      status: 409,
      message: ErrorMessages.duplicateBoard,
    });
  }

  next();
};

export default ctrlWrapper(isNewBoard);
