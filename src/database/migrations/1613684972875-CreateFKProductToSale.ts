/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateFKProductToSale1613684972875 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'sale',
      new TableForeignKey({
        name: 'ProductToSale',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sale', 'ProductToSale');
  }
}
