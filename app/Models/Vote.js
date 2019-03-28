'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vote extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
    startup () {
        return this.belongsTo('App/Models/Startup')
    }
}

module.exports = Vote
