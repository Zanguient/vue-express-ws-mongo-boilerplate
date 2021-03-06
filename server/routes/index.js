'use strict'

import express from 'express'
import example from './example'
import exampleInsertDb from './exampleInsertDb'
import session from './session'
import user from './user'

const router = express.Router()

router.use('/example', example)
router.use('/exampleInsertDb', exampleInsertDb)
router.use('/', session)
router.use('/', user)

export default router
