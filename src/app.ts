import express, { Express, Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { IHttpError } from './types/types.type';
import AppRouter from './routes';

const app: Express = express();
const router = new AppRouter(app);
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

router.init();

app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err: IHttpError, req: Request, res: Response, next: NextFunction): void => {
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
