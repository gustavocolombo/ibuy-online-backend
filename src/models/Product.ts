import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: number;
}
