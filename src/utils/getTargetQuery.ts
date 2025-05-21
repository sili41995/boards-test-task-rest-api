import { IGetTargetQueryProps } from '../types/funcs.type';
import { TargetQuery } from '../types/types.type';

const getTargetQuery = ({ query, name }: IGetTargetQueryProps): TargetQuery => {
  const result = query[name];

  return result;
};

export default getTargetQuery;
