/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1613617196106 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new Table({
      name: 'product',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
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
          name: 'quantity',
          type: 'int',
          default: 1,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
