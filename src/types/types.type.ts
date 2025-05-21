import { ParsedQs } from 'qs';

export type TargetQuery = string | ParsedQs | (string | ParsedQs)[] | undefined;

export type HttpErrorMessageStatus = 400 | 401 | 403 | 404 | 409 | 500;

export interface IHttpError {
  status: HttpErrorMessageStatus;
  message?: string;
  meta?: { cause: string };
}

export type HttpErrorMessages = Record<HttpErrorMessageStatus, string>;

export interface IRegExp {
  email: RegExp;
  notEmptyValue: RegExp;
}

export interface IDecodedToken {
  id: number;
}
