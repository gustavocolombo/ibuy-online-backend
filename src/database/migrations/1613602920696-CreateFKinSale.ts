/* eslint-disable import/prefer-default-export */
import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export class CreateFKinSale1613602920696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sale',
      new TableColumn({
        name: 'seller_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'sale',
      new TableForeignKey({
        name: 'SellerOnSale',
        columnNames: ['seller_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'seller',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sale', 'SellerOnSale');
    await queryRunner.dropColumn('sale', 'seller_id');
  }
}
