import Joi from 'joi';
import { ErrorMessages } from '../constants';

const titleSettings = Joi.string().messages({
  'any.required': ErrorMessages.titleReq,
});

const addSchema = Joi.object({
  title: titleSettings.required(),
});

const updateByIdSchema = Joi.object({
  title: titleSettings,
})
  .min(1)
  .messages({
    'object.min': ErrorMessages.missingFields,
  });

const schemas = {
  add: addSchema,
  updateById: updateByIdSchema,
};

export default schemas;
