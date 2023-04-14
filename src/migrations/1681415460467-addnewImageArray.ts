import { MigrationInterface, QueryRunner } from "typeorm";

export class addnewImageArray1681415460467 implements MigrationInterface {
    name = 'addnewImageArray1681415460467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "year" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" numeric(8,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" numeric(8,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "year" character varying(50) NOT NULL`);
    }

}
