const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const asyncMiddleware = require('../middleware/asyncMiddleware')

module.exports = function Index({ formService, authenticationMiddleware }) {
  const router = express.Router()

  router.use((req, res, next) => {
    if (typeof req.csrfToken === 'function') {
      res.locals.csrfToken = req.csrfToken()
    }
    next()
  })
  
  router.use((req, res, next) => {
    if (typeof req.csrfToken === 'function') {
      res.locals.csrfToken = req.csrfToken()
    }
    next()
  })

  router.get('/', asyncMiddleware(async (req, res) => {
    res.render('pages/sign-in', { data: res.locals.formObject, csrfToken: req.csrfToken() })
    })
  )

  router.use(bodyParser.urlencoded({ extended: true }))

  router.post('/', asyncMiddleware(async (req, res) => {
    res.render('pages/new-repair-request', { csrfToken: req.csrfToken() })
    })
  )

  return router
}
