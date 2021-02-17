import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('sale')
class Sale {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  seller: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column('timestamp with time zone')
  dateSale: Date;
}

export default Sale;
