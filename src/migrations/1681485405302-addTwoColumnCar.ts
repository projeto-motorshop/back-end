import { MigrationInterface, QueryRunner } from "typeorm";

export class addTwoColumnCar1681485405302 implements MigrationInterface {
    name = 'addTwoColumnCar1681485405302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ADD "goodDeal" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "car" ADD "isPublished" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "isPublished"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "goodDeal"`);
    }

}
