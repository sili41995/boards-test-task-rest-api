import Joi from 'joi';
import { ErrorMessages, ProfileSettings, regExp } from '../constants';

const nameSettings = Joi.string().messages({
  'any.required': ErrorMessages.nameReq,
});

const passwordSettings = Joi.string().pattern(regExp.notEmptyValue).min(ProfileSettings.passMinLength).max(ProfileSettings.passMaxLength).messages({
  'any.required': ErrorMessages.passwordReq,
  'string.min': ErrorMessages.passwordMinLength,
  'string.max': ErrorMessages.passwordMaxLength,
  'string.pattern.base': ErrorMessages.emptyString,
});

const emailSettings = Joi.string().pattern(regExp.email).messages({
  'any.required': ErrorMessages.emailReq,
  'string.pattern.base': ErrorMessages.emailRegExp,
});

const signUpSchema = Joi.object({
  name: nameSettings.required(),
  password: passwordSettings.required(),
  email: emailSettings.required(),
});

const signInSchema = Joi.object({
  password: passwordSettings.required(),
  email: emailSettings.required(),
});

const schemas = {
  signUp: signUpSchema,
  signIn: signInSchema,
};

export default schemas;
