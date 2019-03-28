'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VoteSchema extends Schema {
  up () {
    this.create('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned().references('id').inTable('users')
      .notNullable()
      table.integer('startup_id').unsigned().references('id').inTable('startups')
      .notNullable()
    })
  }

  down () {
    this.drop('votes')
  }
}

module.exports = VoteSchema
