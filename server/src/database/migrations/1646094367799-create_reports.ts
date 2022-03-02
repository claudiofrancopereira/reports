import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createReports1646094367799 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table( {
      name: 'reports',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'reportNumber',
          type: 'varchar'
        },
        {
          name: 'date',
          type: 'varchar'
        },
        {
          name: 'initialHour',
          type: 'varchar'
        },
        {
          name: 'endHour',
          type: 'varchar'
        },
        {
          name: 'staff',
          type: 'varchar'
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'nature',
          type: 'varchar'
        },
        {
          name: 'history',
          type: 'text',
        },
        {
          name: 'notes',
          type: 'text'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reports');

  }

}
