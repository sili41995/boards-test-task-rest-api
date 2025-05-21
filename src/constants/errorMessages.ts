import ProfileSettings from './profileSettings';
import TaskStatuses from './taskStatuses';

enum ErrorMessages {
  missingFields = 'Missing fields',
  nameReq = 'Missing required name field',
  passwordReq = 'Missing required password field',
  passwordMinLength = `Password length must be at least ${ProfileSettings.passMinLength} characters long`,
  passwordMaxLength = `Password length must be no more than ${ProfileSettings.passMaxLength} characters long`,
  emptyString = 'Value cannot be the empty string',
  emailReq = 'Missing required email field',
  emailRegExp = 'Email must be letters, digits, dot, special symbols and @',
  userNotFound = 'User not found',
  duplicateEmail = 'Email already use',
  incorrectCredentials = 'Email or password is wrong',
  titleReq = 'Missing required title field',
  duplicateBoard = 'Board already use',
  duplicateTask = 'Task already use',
  descReq = 'Missing required desc field',
  taskStatusReq = 'Missing required status field',
  boardIdReq = 'Missing required boardId field',
  taskStatus = `Value of the status field must be one of these - '${TaskStatuses.done}', '${TaskStatuses.inProgress}', '${TaskStatuses.todo}'`,
}

export default ErrorMessages;
