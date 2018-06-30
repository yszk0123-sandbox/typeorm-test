import { ColumnOptions, CreateDateColumn } from 'typeorm';
import { dateTransformer } from '../transformers/dateTransformer';

export function CustomCreateDateColumn(options?: ColumnOptions): Function {
  const finalOptions = {
    type: Date,
    transformer: dateTransformer,
    ...options
  };

  return CreateDateColumn(finalOptions);
}
