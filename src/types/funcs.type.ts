import { ParsedQs } from 'qs';
import { Query } from '../constants';

export interface IGenerateToken {
  id: number;
  secretKey: string;
}

export interface IMutateByIdProps {
  id: number;
  ownerId: number;
}

export interface IGetTargetQueryProps {
  query: ParsedQs;
  name: Query;
}
