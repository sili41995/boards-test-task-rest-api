import { NextFunction, Request, Response } from 'express';
import { httpError } from '../utils';
import { Fields } from '../constants';

const isValidBoardId = (req: Request, res: Response, next: NextFunction): void => {
  const boardId = req.body[Fields.boardId];

  const isInvalidId = Number.isNaN(Number(boardId));

  if (isInvalidId) {
    throw httpError({ status: 404, message: `${boardId} is not valid id` });
  }

  next();
};

export default isValidBoardId;
