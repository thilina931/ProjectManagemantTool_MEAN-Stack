const mongoose = require('mongoose');
const Task     = require('../models/task');

exports.task_get_all = function(req,res){
    console.log('get request for all tasks  ');
    //project model create
    Task.find({})
    .exec(function(err,task){
        if(err){ 
            console.log("error to retive tasks ");
        }
        else
        {
            res.json(task);
        }
    }) ;
}

exports.get_task = function(req,res){
    console.log('get request for single task  ');
    //taskmodle creates
    Task.findById(req.params.id) 
    .exec(function(err,task){
        if(err){ 
            console.log("error to retive task ");
        }
        else
        {
            res.json(task);
        }
    }) ;
}

exports.task_insert = function(req,res){
    console.log('post a task');
    var newtask =new Task();
    newtask.taskname= req.body.taskname;
    newtask.member=req.body.member;
    newtask.allocatedDate =req.body.allocatedDate;
    newtask.Duedate=req.body.Duedate;
    newtask.description =req.body.description;

    newtask.save(function(err,insertask){
        if(err)
        {
            console.log('Error saving task ');
        }
        else
        {
            res.json(insertask);
        }
    });

}

exports.task_update = function(req,res){
    console.log('Update a task ');
    Task.findByIdAndUpdate(req.params.id,
    {
        $set:{taskname:req.body.taskname,
            member:req.body.member,
            allocatedDate:req.body.allocatedDate,
            Duedate:req.body.Duedate,
            description:req.body.description
        }
    },
    {
        new:true
    },
    function(err,updateTask){
        if(err)
        {
            res.send("Error updating project");
        }
        else
        {
            res.json(updateTask);
        }
    }
    );

}

exports.task_delete = function(req, res){
    console.log('remove task');
    Task.findByIdAndRemove(req.params.id, function(err, deletetask){
        if(err)
        {
            res.send("Error removeing task");

        }
        else
        {
            res.json(deletetask);
        }
    });
}
exports.task_search = function(req,res){

    const U = req.params.taskname;
    
    Task.find().or([{taskname:new RegExp(U,'i')},
   {member:new RegExp(U,'i')}])
   .select('_id taskname member allocatedDate Duedate description')
   .exec()
   .then(doc=>{
       if(doc){
           res.json(doc);
       }
   })

   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error:err
       });
   })
}