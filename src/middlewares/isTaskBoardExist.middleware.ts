import { Response, Request, NextFunction } from 'express';
import { httpError } from '../utils';
import { Fields } from '../constants';
import prisma from '../prisma';
import ctrlWrapper from './ctrlWrapper.middleware';

const isTaskBoardExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id = req.body[Fields.boardId];

  const result = await prisma.board.findUnique({ where: { id } });

  if (!result) {
    throw httpError({ status: 404 });
  }

  next();
};

export default ctrlWrapper(isTaskBoardExist);
