const express = require('express')
const asyncMiddleware = require('../middleware/asyncMiddleware')

module.exports = function Index({logger}) {

  const router = express.Router();
  
  router.get('/', asyncMiddleware(async (req, res) => {
    res.render('pages/sign-in', { data: res.locals.formObject, csrfToken: req.csrfToken() })
    })
  )

  router.post('/', asyncMiddleware(async (req, res) => {
    res.redirect('/new-repair-request')
    })
  )

  router.get('/sign-in', asyncMiddleware(async (req, res) => {
    res.render('pages/sign-in', { data: res.locals.formObject, csrfToken: req.csrfToken() })
    })
  )

  router.post('/sign-in', asyncMiddleware(async (req, res) => {
    res.redirect('/new-repair-request')
    })
  )

  router.get(
    '/new-repair-request',
    asyncMiddleware(async (req, res) => {
      res.render('pages/new-repair-request', { data: res.locals.formObject, csrfToken: req.csrfToken() })
    })
  )

  return router
}
