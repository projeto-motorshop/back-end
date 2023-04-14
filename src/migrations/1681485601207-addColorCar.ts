import { MigrationInterface, QueryRunner } from "typeorm";

export class addColorCar1681485601207 implements MigrationInterface {
    name = 'addColorCar1681485601207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ADD "color" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "color"`);
    }

}
