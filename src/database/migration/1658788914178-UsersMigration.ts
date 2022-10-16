import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UsersMigration1658788914178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "firstName",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "lastName",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "age",
                        type: "int",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
