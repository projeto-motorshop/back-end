import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsers1683051273500 implements MigrationInterface {
    name = 'createUsers1683051273500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`);
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
        await queryRunner.query(`DROP TABLE "model"`);
        await queryRunner.query(`DROP TABLE "brand"`);
    }

}
