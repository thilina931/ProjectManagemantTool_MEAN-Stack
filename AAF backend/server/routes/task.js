const express = require('express');
const router =express.Router();
const Task= require('../models/task');
const cheakAuth = require ('../middelware/cheak-auth');
const TaskController =require('../controllers/task');

//fetch all tasks
router.get('/tasks',cheakAuth,TaskController.task_get_all);

//fetch single task by id
router.get('/tasks/:id',cheakAuth,TaskController.get_task);

//insert the task
router.post('/task',cheakAuth,TaskController.task_insert);

//update Task 
router.put('/task/:id',cheakAuth,TaskController.task_update);

//delete task
router.delete('/task/:id',cheakAuth,TaskController.task_delete);

//serch task
router.get('/task/search/:taskname',TaskController.task_search);

module.exports =router;