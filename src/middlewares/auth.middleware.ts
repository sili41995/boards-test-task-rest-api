import { NextFunction, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { IAuthRequest } from '../types/auth.type';
import { IDecodedToken } from '../types/types.type';
import { httpError } from '../utils';
import prisma from '../prisma';
import ctrlWrapper from './ctrlWrapper.middleware';

const { SECRET_KEY } = process.env;

const auth = async (req: IAuthRequest, res: Response, next: NextFunction): Promise<void> => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    throw httpError({ status: 401 });
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY as Secret) as IDecodedToken;
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        token: true,
        email: true,
        name: true,
      },
    });

    if (!user || user.token !== token) {
      throw httpError({ status: 401 });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof Error) {
      throw httpError({ status: 401, message: error.message });
    }
  }
};

export default ctrlWrapper(auth);
