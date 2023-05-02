import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGoodDeal1683049077199 implements MigrationInterface {
    name = 'AddGoodDeal1683049077199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "mileage" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "description" character varying(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "mileage" character varying(30) NOT NULL`);
    }

}
