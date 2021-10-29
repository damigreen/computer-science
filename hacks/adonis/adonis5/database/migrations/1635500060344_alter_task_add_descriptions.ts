import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterTaskAddDescriptions extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('description').nullable()
    })
  }

  public async down() {
    // Alter table again so that it does not have description column
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
