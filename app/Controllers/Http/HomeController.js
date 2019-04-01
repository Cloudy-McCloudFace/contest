'use strict'
const Startup = use('App/Models/Startup')

class HomeController {
    async render ({ view }) {
        try { 
            const allStartups = await Startup   
                                .query()
                                .where('approved', true)
                                .withCount('votes')
                                .fetch()
 
            return view.render('pages.home', { startups: allStartups.toJSON() })

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = HomeController
