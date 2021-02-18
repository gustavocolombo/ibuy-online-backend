import {
  PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Seller from './Seller';

@Entity('sale')
class Sale {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column('timestamp with time zone')
  dateSale: Date;

  @OneToOne(() => Seller, { eager: true })
  @JoinColumn({ name: 'seller_id' })
  seller_id: Seller;
}

export default Sale;
