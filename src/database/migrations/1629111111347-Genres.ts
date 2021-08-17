import { MigrationInterface, QueryRunner } from "typeorm";

export class Genres1629111111347 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "usersId" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_s341b1c0c8416wsfc6f907b749w" PRIMARY KEY("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "genres_games" ("genresId" uuid NOT NULL, "gamesId" uuid NOT NULL, CONSTRAINT "PK_lksu6kmj74477fd5c7693kjsyeh" PRIMARY KEY ("genresId", "gamesId"))',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_e5345d02ucw26kwh10ty8e5c35" ON "genres_games" ("genresId") ',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_ls945lo9uclkskwh10ty8e5c87" ON "genres_games" ("gamesId") ',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_dcf45239uclkskder0ty8e5c87" ON "genres" ("usersId") ',
    );
    await queryRunner.query(
      'ALTER TABLE "genres_games" ADD CONSTRAINT "FK_e5345d02ucw26kwh10ty8e5c35a" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "genres_games" ADD CONSTRAINT "FK_ls945lo9uclkskwh10ty8e5c87a" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "genres" ADD CONSTRAINT "FK_dcf45239uclkskder0ty8e5c87a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "genres_games" DROP CONSTRAINT "FK_e5345d02ucw26kwh10ty8e5c35a"',
    );
    await queryRunner.query(
      'ALTER TABLE "genres_games" DROP CONSTRAINT "FK_ls945lo9uclkskwh10ty8e5c87a"',
    );
    await queryRunner.query(
      'ALTER TABLE "genres" DROP CONSTRAINT "FK_dcf45239uclkskder0ty8e5c87a"',
    );
    await queryRunner.query('DROP INDEX "IDX_e5345d02ucw26kwh10ty8e5c35"');
    await queryRunner.query('DROP INDEX "IDX_ls945lo9uclkskwh10ty8e5c87"');
    await queryRunner.query('DROP INDEX "IDX_dcf45239uclkskder0ty8e5c87"');
    await queryRunner.query('DROP TABLE "genres_games"');
    await queryRunner.query('DROP TABLE "genres"');
  }

}
