import { MigrationInterface, QueryRunner } from "typeorm";

export class Orders1629163965123 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "usersId" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0o9ib1c0c8s16sfsc6f90ad798w" PRIMARY KEY("id"))',
    );
    await queryRunner.query(
      'CREATE TABLE "orders_items" ("ordersId" uuid NOT NULL, "usersId" uuid NOT NULL, "gamesId" uuid NOT NULL, CONSTRAINT "PK_lk000kmjmja77fkjclki3kjsyeh" PRIMARY KEY ("usersId", "gamesId"))',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_lk345klkikj2lkwh10tklkicpo" ON "orders" ("usersId") ',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_cpo45klklks9lkwslotklkikkk" ON "orders_items" ("ordersId") ',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_aaa45lkilks9lkwslotklkik33" ON "orders_items" ("usersId") ',
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_bbb45asdlks9lkwsasdklssk3a" ON "orders_items" ("gamesId") ',
    );
    await queryRunner.query(
      'ALTER TABLE "orders" ADD CONSTRAINT "FK_lk345klkikj2lkwh10tklkicpoa" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" ADD CONSTRAINT "FK_cpo45klklks9lkwslotklkikkka" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" ADD CONSTRAINT "FK_aaa45lkilks9lkwslotklkik33a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" ADD CONSTRAINT "FK_bbb45asdlks9lkwsasdklssk3aa" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "orders" DROP CONSTRAINT "FK_lk345klkikj2lkwh10tklkicpoa"',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" DROP CONSTRAINT "FK_cpo45klklks9lkwslotklkikkka"',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" DROP CONSTRAINT "FK_aaa45lkilks9lkwslotklkik33a"',
    );
    await queryRunner.query(
      'ALTER TABLE "orders_items" DROP CONSTRAINT "FK_bbb45asdlks9lkwsasdklssk3aa"',
    );
    await queryRunner.query('DROP INDEX "IDX_lk345klkikj2lkwh10tklkicpo"');
    await queryRunner.query('DROP INDEX "IDX_cpo45klklks9lkwslotklkikkk"');
    await queryRunner.query('DROP INDEX "IDX_aaa45lkilks9lkwslotklkik33"');
    await queryRunner.query('DROP INDEX "IDX_bbb45asdlks9lkwsasdklssk3a"');
    await queryRunner.query('DROP TABLE "orders"');
    await queryRunner.query('DROP TABLE "orders_items"');
  }

}
