import jwt, { SignOptions } from 'jsonwebtoken';
import { IGenerateToken } from '../types/funcs';

const generateToken = ({ id, secretKey }: IGenerateToken): string => {
  const payload = { id };

  const options: SignOptions = {
    expiresIn: '30d',
  };

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

export default generateToken;
