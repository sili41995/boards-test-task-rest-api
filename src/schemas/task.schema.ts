import Joi from 'joi';
import { ErrorMessages, TaskStatuses } from '../constants';

const boardIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.boardIdReq,
});

const titleSettings = Joi.string().messages({
  'any.required': ErrorMessages.titleReq,
});

const descSettings = Joi.string().messages({
  'any.required': ErrorMessages.descReq,
});

const statusSettings = Joi.string()
  .valid(...Object.values(TaskStatuses))
  .messages({
    'any.required': ErrorMessages.taskStatusReq,
    'any.only': ErrorMessages.taskStatus,
  });

const addSchema = Joi.object({
  boardId: boardIdSettings.required(),
  title: titleSettings.required(),
  desc: descSettings.required(),
  status: statusSettings,
});

const updateByIdSchema = Joi.object({
  title: titleSettings,
  desc: descSettings,
  status: statusSettings,
})
  .min(1)
  .messages({
    'object.min': ErrorMessages.missingFields,
  });

const updateStatusByIdSchema = Joi.object({
  status: statusSettings.required(),
});

const schemas = {
  add: addSchema,
  updateById: updateByIdSchema,
  updateStatusById: updateStatusByIdSchema,
};

export default schemas;
