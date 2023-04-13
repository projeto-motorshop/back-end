import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCarMigration1681391563814 implements MigrationInterface {
    name = 'updateCarMigration1681391563814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "year" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "priceFipe"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "priceFipe" numeric(8,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "price" numeric(8,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "car" ADD "year" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
    }

}
