const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, profileController.getProfile)

//router.put('/updateWeight', profileController.updateWeight)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router