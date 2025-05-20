import { httpErrorMessages } from '../constants';
import { IHttpError } from '../types/types.type';

const httpError = ({ status = 500, message = httpErrorMessages[status] }: IHttpError): IHttpError => {
  const error = new Error(message) as Error & IHttpError;
  error.status = status;

  return error;
};

export default httpError;
