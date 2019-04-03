'use strict'
const Startup = use('App/Models/Startup')

class StartupListingController {
    async render ({ request, view }) {
        try { 
            const page = request.get().page || 1

            const allStartups = await Startup   
                                .query()
                                .where('approved', true)
                                .withCount('votes')
                                .paginate(page, 10)
            const startups = allStartups.toJSON()
            
            return view.render('pages.startups', { 
                totalStartups: startups.total,
                curr_page: startups.page,
                lastPage: startups.lastPage,
                startups: startups.data
             })

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = StartupListingController
