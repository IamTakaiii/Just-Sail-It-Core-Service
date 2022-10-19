import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createSchema('core')
    this.schema
      .withSchema('core')
      .createTable(this.tableName, (table) => {
        table.string('id', 256)
          .primary()
        table.string('username', 128)
          .notNullable()
        table.string('email', 256)
          .notNullable()
        table.string('nonce')
          .notNullable()
        table.jsonb('profile')
        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
      })
  }

  public async down() {
    this.schema
      .withSchema('core')
      .dropTable(this.tableName)
    this.schema.dropSchema('core')
  }
}
