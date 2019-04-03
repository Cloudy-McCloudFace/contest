'use strict'
const Vote = use('App/Models/Vote')

class VoteController {
    async submitVote ({ auth, params, response }) {
        try {
            const startup_id = params.startup_id
            
            const existingVote = await Vote.findBy('user_id', auth.user.id);

            if (existingVote === null) {
                const newVote = new Vote()
                newVote.user_id = auth.user.id
                newVote.startup_id = startup_id

                await newVote.save()
            }
            else {
                await existingVote.delete()
                const newVote = new Vote()
                newVote.user_id = auth.user.id
                newVote.startup_id = startup_id

                await newVote.save()
            }

            response.redirect('/startups')
        } 
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = VoteController
