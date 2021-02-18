/* eslint-disable import/prefer-default-export */
import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
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

    await queryRunner.createForeignKey(
      'sale',
      new TableForeignKey({
        name: 'SellerToSale',
        columnNames: ['seller_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'seller',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sale', 'ProductToSale');
    await queryRunner.dropTable('sale');
  }
}
