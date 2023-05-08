import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrate1683295897020 implements MigrationInterface {
    name = 'initialMigrate1683295897020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "cep" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "description" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "cep" character varying(400) NOT NULL`);
    }

}
