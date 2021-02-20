/* eslint-disable import/prefer-default-export */
import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export class CreateFKSellerProduct1613684079353 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'seller_id',
        type: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );

    await queryRunner.createForeignKey(
      'product',
      new TableForeignKey({
        name: 'SellerOfProduct',
        columnNames: ['seller_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'seller',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sale', 'SellerOfProduct');
    await queryRunner.dropColumn('product', 'seller_id');
  }
}
