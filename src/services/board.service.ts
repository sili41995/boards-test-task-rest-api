import { Board } from '@prisma/client';
import prisma from '../prisma';
import { httpError } from '../utils';
import { Boards, IAddNewBoardProps, IUpdateByIdBoardProps } from '../types/boards.type';
import { IMutateByIdProps } from '../types/funcs.type';

class BoardService {
  async getAll(ownerId: number): Promise<Boards> {
    const result = await prisma.board.findMany({
      where: { ownerId },
      select: {
        id: true,
        title: true,
        tasks: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return result;
  }

  async getById({ id, ownerId }: IMutateByIdProps): Promise<Board> {
    const result = await prisma.board.findUnique({
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

  async add({ newBoard, ownerId }: IAddNewBoardProps): Promise<Board> {
    const data = { ...newBoard, ownerId };

    const result = await prisma.board.create({ data });

    return result;
  }

  async updateById({ data, id, ownerId }: IUpdateByIdBoardProps): Promise<Board> {
    const result = await prisma.board.update({
      where: {
        id,
        ownerId,
      },
      data,
    });

    return result;
  }

  async deleteById({ id, ownerId }: IMutateByIdProps): Promise<Board> {
    const result = await prisma.board.delete({
      where: {
        id,
        ownerId,
      },
    });

    return result;
  }
}

export default BoardService;
