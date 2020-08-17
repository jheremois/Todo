const db_pool = require('../database/conection') 

exports.todo_main = (req,res)=> {

    db_pool.query('SELECT * FROM tasks',(err,result)=> {
        res.render('todo',{
            task: result
        })
    })
    
}

exports.todo_save_task = async(req, res)=> {
    
    const {task} = req.body

    const pool = await db_pool.query(`INSERT INTO tasks SET ?`,{
        task: task
    })

    res.redirect('/')

}

exports.todo_dalete = async (req, res)=> {
    const {id} = req.params

    const Delete = await db_pool.query(`DELETE FROM tasks WHERE id = ${id}`)

    res.redirect('/')
}