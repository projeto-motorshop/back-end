import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1681508669970 implements MigrationInterface {
    name = 'createTables1681508669970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ADD "color" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "goodDeal" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "car" ADD "isPublished" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "isPublished"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "goodDeal"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "color"`);
    }

}
