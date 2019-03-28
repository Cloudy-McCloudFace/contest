'use strict'
const Vote = use('App/Models/Vote')

class VoteController {
    async submitVote ({ auth, params, response }) {
        try {
            const startup_id = params.startup_id
            
            const vote = await Vote.findOrCreate(
                {
                    startup_id
                },
                {
                    startup_id,
                    user_id: auth.user.id
                }
            )
      
            await vote.save()
      
            response.redirect('/home')
        } 
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = VoteController
