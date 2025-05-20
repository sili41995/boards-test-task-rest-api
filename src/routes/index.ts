import { Application } from 'express';
import { authRouter } from './api';
import { RouterPaths } from '../constants';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.get(RouterPaths.root, (_req, res) => {
      res.send('API Running');
    });
    this.app.use(RouterPaths.auth, authRouter);
  }
}

export default AppRouter;
