import { User } from '@prisma/client';
import { Request } from 'express';

export type SavedUser = Omit<User, 'password'>;

export interface IAuthRequest extends Request {
  body: User;
  user?: SavedUser;
}

export type Credentials = Pick<User, 'password' | 'email'>;

export type NewUser = Pick<User, 'email' | 'name' | 'password'>;

export type LogoutRes = Pick<User, 'id'>;
