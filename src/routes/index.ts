import { Application } from 'express';
import { authRouter, boardRouter, taskRouter } from './api';
import { RouterPaths } from '../constants';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.get(RouterPaths.root, (_req, res) => {
      res.send('API Running');
    });
    this.app.use(RouterPaths.auth, authRouter);
    this.app.use(RouterPaths.boards, boardRouter);
    this.app.use(RouterPaths.tasks, taskRouter);
  }
}

export default AppRouter;
