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

// Route.on('/').render('pages.welcome')

Route.get('/', 'HomeController.render')

Route.get('/startups', 'StartupListingController.render')
     .middleware('auth')

Route.get('/unapproved', 'UnapprovedController.show')
     .middleware(['auth', 'is:administrator'])

Route.post('/approve/:startup_id', 'UnapprovedController.approve')
     .middleware(['auth', 'is:administrator'])

Route.on('/register').render('pages.register')
Route.post('/register', 'UserController.register').as('register')

Route.on('/login').render('pages.login')
Route.post('/login', 'UserController.login').as('login')

Route.get('/logout', 'UserController.logout')

Route.on('/submit-startup').render('pages.submit-startup')
     .middleware('auth')

Route.post('/submit-startup', 'StartupController.create').as('submit-startup')

Route.post('/vote/:startup_id', 'VoteController.submitVote')
     .middleware('auth')