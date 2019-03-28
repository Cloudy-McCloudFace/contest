'use strict'
const Startup = use('App/Models/Startup')

class HomeController {
    async render ({ view }) {
        try { 
            const allStartups = await Startup.all()
            console.log(allStartups.toJSON())
            return view.render('home', { startups: allStartups.toJSON() })

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = HomeController
