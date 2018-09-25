const express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const cheakAuth = require ('../middelware/cheak-auth');
const ApiController =require('../controllers/api');

const db="mongodb+srv://Thilina:1qaz2wsx@cluster0-hmuun.mongodb.net/ProjectDB?retryWrites=true";
mongoose.Promise =global.Promise;

mongoose.connect (db,function(err){
    if(err){
        console.error("DB Error !"+ err);
    }

});
//featch data all projrcts
router.get('/projects',cheakAuth,ApiController.api_get_all);

//fetch single project by id
router.get('/projects/:id',cheakAuth,ApiController.api_get_project);

//insert the projects
router.post('/project',cheakAuth,ApiController.api_insert_project);

//update projects 
router.put('/project/:id',cheakAuth,ApiController.api_update_project);

//delete projects
router.delete('/project/:id',ApiController.api_delete_project);

//serch project
router.get('/projects/search/:projectTitle',cheakAuth,ApiController.api_serch_project);


module.exports =router;