import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('seller')
export default class Seller {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
