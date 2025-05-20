import { ParamsDictionary } from 'express-serve-static-core';
import { Endpoints } from '../constants';

const getId = (params: ParamsDictionary): number => {
  const dynamicId = params[Endpoints.dynamicId];
  const id = Number(dynamicId);

  return id;
};

export default getId;
