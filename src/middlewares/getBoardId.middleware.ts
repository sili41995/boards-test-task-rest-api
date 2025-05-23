import { NextFunction, Response } from 'express';
import { getTargetQuery } from '../utils';
import { Query } from '../constants';
import { ITaskRequest } from '../types/tasks.type';

const getBoardId = (req: ITaskRequest, res: Response, next: NextFunction): void => {
  const targetQuery = getTargetQuery({
    name: Query.boardId,
    query: req.query,
  });

  if (targetQuery) {
    const boardId = Number(targetQuery);

    req.boardId = boardId;
  }

  next();
};

export default getBoardId;
