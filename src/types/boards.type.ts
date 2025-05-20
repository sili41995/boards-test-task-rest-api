import { Board } from '@prisma/client';
import { SavedUser } from './auth.type';
import { Request } from 'express';
import { IMutateByIdProps } from './funcs';

export type Boards = Board[];

export type NewBoard = Pick<Board, 'title'>;

export interface IBoardRequest extends Request {
  user?: SavedUser;
}

export interface IAddNewBoardProps {
  newBoard: NewBoard;
  ownerId: number;
}

export interface IUpdateByIdBoardProps extends IMutateByIdProps {
  data: Partial<NewBoard>;
}
