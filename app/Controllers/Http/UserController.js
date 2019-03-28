'use strict'
const User = use('App/Models/User')

class UserController {
    async login ({ auth, request, response }) {
        try {
            console.log('loggging attempt')
            const { email, password } = request.all()
            await auth.attempt(email, password)
    
            response.redirect('/home')
        }
        catch (error) {
            console.log(error);
        }
    }
    async register ({ request, response }) {
        try { 
            const { username, email, password } = request.all()
            const user = await User.findOrCreate(
                {
                  email
                },
                {
                  username,
                  email,
                  password
                }
            )
      
            await user.save()
      
            response.redirect('/home')

        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController
