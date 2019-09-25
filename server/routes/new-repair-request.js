const express = require('express')
const asyncMiddleware = require('../middleware/asyncMiddleware')

module.exports = function Index({ formService, authenticationMiddleware }) {
  const router = express.Router()

  router.use((req, res, next) => {
    if (typeof req.csrfToken === 'function') {
      res.locals.csrfToken = req.csrfToken()
    }
    next()
  })

  router.get(
    '/',
    asyncMiddleware(async (req, res) => {
      res.render('pages/new-repair-request', { data: res.locals.formObject, csrfToken: req.csrfToken() })
    })
  )

  return router
}
