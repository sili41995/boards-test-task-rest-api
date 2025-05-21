import { Request } from 'express';
import { Board } from '@prisma/client';
import { SavedUser } from './auth.type';
import { IMutateByIdProps } from './funcs.type';

export interface IBoardRequest extends Request {
  user?: SavedUser;
}

export type Boards = Pick<Board, 'title' | 'id'>[];

export type NewBoard = Pick<Board, 'title'>;

export interface IAddNewBoardProps {
  newBoard: NewBoard;
  ownerId: number;
}

export interface IUpdateByIdBoardProps extends IMutateByIdProps {
  data: Partial<NewBoard>;
}
