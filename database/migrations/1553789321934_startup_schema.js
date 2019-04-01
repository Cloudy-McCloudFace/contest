'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StartupSchema extends Schema {
  up () {
    this.create('startups', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 250).notNullable()
      table.text('description').notNullable()
      table.string('url', 500).notNullable()
      table.string('logo_url', 500).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
        .notNullable()
      table.boolean('approved').notNullable()
    })
  }

  down () {
    this.drop('startups')
  }
} 

module.exports = StartupSchema
