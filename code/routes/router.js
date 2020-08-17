const express = require('express')
const router = express.Router()

const {todo_main, todo_save_task, todo_dalete} = require('../controllers/todo_controller')



module.exports = ()=>{
    
    router.get('/', todo_main)
    router.post('/', todo_save_task)
    router.get('/done/:id', todo_dalete)

    return router
    
}