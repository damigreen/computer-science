import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SensorTypes extends BaseSchema {
  protected tableName = 'sensor_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").nullable();
      table.string("code").nullable();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
