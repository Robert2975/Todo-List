const Task = require('../models/Task')

const getAll =  async (req, res) => {
    try{
        const taskList = await Task.find()
        return res.render("index", {taskList, task: null})
    }catch(err){
        res.status(500).send({error: err.message})
    }
    
}

const createTask = async (req, res) => {
    const task = req.body

    if(!task.task){
        return res.redirect("/")
    }

    try {
        await Task.create(task)
        return res.redirect("/")
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

const getById = async (req, res) => {
    try{
        const task = await Task.findOne({_id: req.params.id}) //Pegar 1 id no banco de dados
        const taskList = await Task.find()
        res.render("index", {task, taskList})
    }catch(err){
        res.status(500).send({error: err.message})
    }
    
}

const update = async (req, res) => {
    try{
        const task = req.body
        await Task.updateOne({ _id: req.params.id}, task)
        res.redirect("/")
    }catch(err){
        res.status(500).send({error: err.message})
    }
    
}

module.exports = {
    getAll,
    createTask,
    getById,
    update
}