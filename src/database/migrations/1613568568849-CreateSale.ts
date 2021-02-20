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
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'type',
          type: 'varchar',
        },
        {
          name: 'price',
          type: 'float',
        },
        {
          name: 'seller_id',
          type: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'product_id',
          type: 'uuid',
          default: 'uuid_generate_v4()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sale');
  }
}
