'use strict'
const Startup = use('App/Models/Startup')

class HomeController {
    async render({ view }) {
        try {
            const allStartups = await Startup   
                        .query()
                        .has('votes')
                        .withCount('votes')
                        .fetch()
            const startups = allStartups.toJSON()
 
            const sorted = startups.sort((a, b) => b['__meta__']['votes_count'] - a['__meta__']['votes_count']);
            
            return view.render('pages.home', {
                leaders: sorted.splice(0, 10)
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = HomeController
