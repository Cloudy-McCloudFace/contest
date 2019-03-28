'use strict'
const Startup = use('App/Models/Startup')

class StartupController {
    async create ({ auth, request, response }) {
        try { 
            const { name, description, url, logo_url } = request.all()
            console.log(name,description,url, logo_url)
            const startup = await Startup.findOrCreate(
                {
                    user_id: auth.user.id
                },
                {
                    name,
                    description,
                    url,
                    logo_url,
                    user_id: auth.user.id
                }
            )
      
            await startup.save()
      
            response.redirect('/home')

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = StartupController
