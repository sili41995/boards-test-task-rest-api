import ProfileSettings from './profileSettings';

const enum ErrorMessages {
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
}

export default ErrorMessages;
