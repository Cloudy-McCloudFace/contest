'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    for (let i = 1; i < 50; i++) {
      await Factory.model('App/Models/User').create({
        password: 'pass',
      })
      await Factory.model('App/Models/Startup').create({
        user_id: i,
      })
    }
  }
}

module.exports = UserSeeder
