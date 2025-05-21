import { Response, Request } from 'express';
import { TaskService } from '../services';
import { getId, httpError } from '../utils';
import { ITaskRequest } from '../types/tasks.type';

export class TaskController {
  constructor(private taskService: TaskService) {
    this.taskService = taskService;
  }

  async getAll(req: ITaskRequest, res: Response): Promise<void> {
    const { user, boardId } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const result = await this.taskService.getAll({
      ownerId: user.id,
      boardId,
    });

    res.status(200).json(result);
  }

  async getById(req: ITaskRequest, res: Response): Promise<void> {
    const { user } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(req.params);

    const result = await this.taskService.getById({
      id,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }

  async add(req: ITaskRequest, res: Response): Promise<void> {
    const { user, body } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const result = await this.taskService.add({
      newTask: body,
      ownerId: user.id,
    });

    res.status(201).json(result);
  }

  async updateById(req: ITaskRequest, res: Response): Promise<void> {
    const { user, params, body } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(params);

    const result = await this.taskService.updateById({
      id,
      data: body,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }

  async deleteById(req: ITaskRequest, res: Response): Promise<void> {
    const { user, params } = req;

    if (!user) {
      throw httpError({ status: 400 });
    }

    const id = getId(params);

    const result = await this.taskService.deleteById({
      id,
      ownerId: user.id,
    });

    res.status(200).json(result);
  }
}

const taskController = new TaskController(new TaskService());

export default taskController;
