import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1682433671428 implements MigrationInterface {
    name = 'InitialMigration1682433671428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "description" character varying(500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "description" character varying(50) NOT NULL`);
    }

}
