const createApp = require('./app')

const createSignInService = require('./authentication/signInService')

// pass in dependencies of service

const app = createApp({  
  signInService: createSignInService(),
})

module.exports = app
