import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Credentials, LogoutRes, NewUser, SavedUser } from '../types/auth.type';
import { generateToken, httpError } from '../utils';
import { ErrorMessages } from '../constants';
import prisma from '../prisma';

const { SECRET_KEY } = process.env;

class AuthService {
  async signUp(data: NewUser): Promise<SavedUser> {
    const { email, password } = data;
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateEmail,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { ...data, password: hashPassword },
    });

    if (!SECRET_KEY) {
      throw httpError({ status: 400 });
    }

    const { id, email: newUserEmail } = newUser;

    const token = generateToken({
      secretKey: SECRET_KEY,
      id,
    });

    const result = await prisma.user.update({
      where: { email: newUserEmail },
      data: { token },
      select: {
        id: true,
        email: true,
        name: true,
        token: true,
      },
    });

    return result;
  }

  async signIn({ email, password }: Credentials): Promise<SavedUser> {
    const user = await prisma.user.findUnique({ where: { email } });
    const isValidPassword = await bcrypt.compare(password as string, user?.password ?? '');

    if (!user || !isValidPassword) {
      throw httpError({
        status: 401,
        message: ErrorMessages.incorrectCredentials,
      });
    }

    if (!SECRET_KEY) {
      throw httpError({ status: 400 });
    }

    const token = generateToken({
      secretKey: SECRET_KEY,
      id: user.id,
    });

    const result = await prisma.user.update({
      where: { email },
      data: { token },
      select: {
        id: true,
        email: true,
        name: true,
        token: true,
      },
    });

    return result;
  }

  async signOut({ email }: SavedUser): Promise<LogoutRes> {
    const result = await prisma.user.update({
      where: { email },
      data: { token: null },
      select: { id: true },
    });

    return result;
  }
}

export default AuthService;
