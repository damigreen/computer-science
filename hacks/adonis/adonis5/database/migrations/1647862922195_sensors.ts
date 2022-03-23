import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sensors extends BaseSchema {
  protected tableName = 'sensors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").nullable();
      table.string("code").nullable();
      table.text("description").nullable();
      table.integer("sensor_type_id")
        .unsigned()
        .references("id")
        .inTable("sensor_types")
        .nullable()
      table.boolean("active").defaultTo(true);
      // table
      //   .integer("unit_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("units")
      //   .nullable();
      table
        .integer("created_by")
        .unsigned()
        .references("id")
        .inTable("users")
        .nullable();
      // table
      //   .integer("organization_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("organizations")
      //   .nullable();
      table.timestamps();
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
      table.dateTime("deleted_at").nullable();

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
