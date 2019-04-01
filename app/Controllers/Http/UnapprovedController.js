'use strict'
const Startup = use('App/Models/Startup')

class UnapprovedController {
    async show ({ view }) {
        try { 
            const allStartups = await Startup   
                                .query()
                                .where('approved', false)
                                .fetch()
 
            return view.render('pages.unapproved', { startups: allStartups.toJSON() })

        }
        catch (error) {
            console.log(error)
        }
    }
    async approve({ auth, params, response }) {
        const existingStartup = await Startup.find(params.startup_id)
        existingStartup.approved = true
        await existingStartup.save()
    }
}

module.exports = UnapprovedController
