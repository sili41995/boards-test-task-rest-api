import { HttpErrorMessages } from '../types/types.type';

const httpErrorMessages: HttpErrorMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
  500: 'Server error',
};

export default httpErrorMessages;
