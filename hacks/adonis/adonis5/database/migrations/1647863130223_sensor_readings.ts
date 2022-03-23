import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SensorReadings extends BaseSchema {
  protected tableName = 'sensor_readings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float("value", 20, 2).nullable();
      // table
      //   .integer("measurement_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("measurements")
      //   .nullable();
      table.float("recorded_at", 20, 2).nullable();
      table
        .integer("sensor_id")
        .unsigned()
        .references("id")
        .inTable("sensors")
        .nullable();
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
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
      table.dateTime("deleted_at").nullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
