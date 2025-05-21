import { Response } from 'express';
import { BoardService } from '../services';
import { getId, httpError } from '../utils';
import { IBoardRequest } from '../types/boards.type';

export class BoardController {
  constructor(private boardService: BoardService) {
    this.boardService = boardService;
  }

  async getAll(req: IBoardRequest, res: Response): Promise<void> {
    if (!req.user) {
      throw httpError({ status: 400 });
    }

    const result = await this.boardService.getAll(req.user.id);

    res.status(200).json(result);
  }

  async getById(req: IBoardRequest, res: Response): Promise<void> {
    const { user } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(req.params);

    const result = await this.boardService.getById({
      id,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }

  async add(req: IBoardRequest, res: Response): Promise<void> {
    const { user, body } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const result = await this.boardService.add({ newBoard: body, ownerId: user.id });

    res.status(201).json(result);
  }

  async updateById(req: IBoardRequest, res: Response): Promise<void> {
    const { user, params, body } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(params);

    const result = await this.boardService.updateById({
      id,
      data: body,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }

  async deleteById(req: IBoardRequest, res: Response): Promise<void> {
    const { user, params } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(params);

    const result = await this.boardService.deleteById({
      id,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }
}

const boardController = new BoardController(new BoardService());

export default boardController;
