'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/home', 'HomeController.render')
     .middleware('auth')

Route.on('/register').render('register')
Route.post('/register', 'UserController.register').as('register')

Route.on('/login').render('login')
Route.post('/login', 'UserController.login').as('login')

Route.get('/logout', 'UserController.logout')

Route.on('/submit-startup').render('submit-startup')
     .middleware('auth')
Route.post('/submit-startup', 'StartupController.create').as('submit-startup')

Route.post('/vote/:startup_id', 'VoteController.submitVote')
     .middleware('auth')