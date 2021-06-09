const router = require('express').Router()
const {getCalls,createItem} = require('../controllers/calls')

router.get('/calls', getCalls)
router.post('/calls', createItem)

module.exports = router