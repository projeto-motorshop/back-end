import { MigrationInterface, QueryRunner } from "typeorm";

export class createNewMigrations1683117649029 implements MigrationInterface {
    name = 'createNewMigrations1683117649029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "description" character varying(50) NOT NULL`);
    }

}
