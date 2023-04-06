import { MigrationInterface, QueryRunner } from "typeorm";

export class addEntities1680785885847 implements MigrationInterface {
    name = 'addEntities1680785885847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthdate" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthdate" DROP NOT NULL`);
    }

}
