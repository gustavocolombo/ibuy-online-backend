/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSale1613568568849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'sale',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'type',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'price',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'dateSale',
          type: 'timestamp with time zone',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sale');
  }
}
