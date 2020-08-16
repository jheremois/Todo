const express = require('express')
const router = express.Router()

const {todo_main, todo_save_task} = require('../controllers/todo_controller')

module.exports = ()=>{
    
    router.get('/', todo_main)
    router.post('/', todo_save_task)

    return router
}