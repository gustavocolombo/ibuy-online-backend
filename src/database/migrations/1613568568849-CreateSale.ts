/* eslint-disable import/prefer-default-export */
import {
  MigrationInterface, QueryRunner, Table,
} from 'typeorm';

export class CreateSale1613568568849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new Table({
      name: 'sale',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'order_id',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'product_id',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'price',
          type: 'decimal',
          precision: 6,
          scale: 2,
        },
        {
          name: 'quantity',
          type: 'int',
          default: 1,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'ordersProductsOrder',
          referencedTableName: 'orders',
          referencedColumnNames: ['id'],
          columnNames: ['order_id'],
          onDelete: 'SET NULL',
        },
        {
          name: 'ordersProductsProduct',
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
          columnNames: ['product_id'],
          onDelete: 'SET NULL',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sale');
  }
}
