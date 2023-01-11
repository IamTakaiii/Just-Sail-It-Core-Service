import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id') .primary()
      table.string('user_id').notNullable()
      table.string('name', 256).notNullable()
      table.text('description').notNullable()
      table.specificType('catagories', 'integer ARRAY').notNullable()
      table.decimal('funding_goal', 27,18).notNullable()
      table.date('start_date').notNullable()
      table.date('end_date').notNullable()
      table.enum('status', ['Funding', 'Close', 'Pause'])
        .notNullable()
        .defaultTo('Funding')
      table.decimal('total', 27,18).notNullable()
      table.integer('backers')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // Additonal For Future Change
      table.integer('truth_score')
        .notNullable()
        .defaultTo(10)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
