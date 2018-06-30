import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { CustomCreateDateColumn } from '../decorators/CustomCreateDateColumn';
import { dateTransformer } from '../transformers/dateTransformer';
import { CustomDate } from '../types/CustomDate';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() age: number;

  @Column() dateAsDate: Date;

  @Column({
    type: Date,
    transformer: dateTransformer
  })
  dateAsString: string;

  @CustomCreateDateColumn() createdAt: CustomDate;

  @UpdateDateColumn() updatedAt: Date;
}
