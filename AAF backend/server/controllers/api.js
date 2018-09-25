const project= require('../models/project');
const mongoose = require('mongoose');

exports.api_get_all = function(req,res){
    console.log('get request for all projects  ');
    //projectmodle create
    project.find({})
    .exec(function(err,projects){
        if(err){ 
            console.log("error to retive project ");
        }
        else
        {
            res.json(projects);
        }
    }) ;
};
exports.api_get_project = function(req,res){
    console.log('get request for single project  ');
    //projectmodle create
    project.findById(req.params.id) 
    .exec(function(err,project){
        if(err){ 
            console.log("error to retive project ");
        }
        else
        {
            res.json(project);
        }
    }) ;
}
exports.api_insert_project =function(req,res){
    console.log('post a project');
    var newproject =new project();
    newproject.projectTitle= req.body.projectTitle;
    newproject.url=req.body.url;
    newproject.description=req.body.description;
    newproject.save(function(err,insertproject){
        if(err)
        {
            console.log('Error saving project ');
        }
        else
        {
            res.json(insertproject);
        }
    });

}
exports.api_update_project = function(req,res){
    console.log('Update a project ');
    project.findByIdAndUpdate(req.params.id,
    {
        $set:{projectTitle:req.body.projectTitle,
            url:req.body.url,
            description:req.body.description
        }
    },
    {
        new:true
    },
    function(err,updateProject){
        if(err)
        {
            res.send("Error updating project");
        }
        else
        {
            res.json(updateProject);
        }
    }
    );

}

exports.api_delete_project = function(req, res){
    console.log('Deleting project');
    project.findByIdAndRemove(req.params.id, function(err, deletedProject){
        if(err)
        {
            res.send("Error deleting Project");

        }
        else
        {
            res.json(deletedProject);
        }
    });
}
exports.api_serch_project = function(req,res){

    const U = req.params.projectTitle;
    
   project.find().or([{projectTitle:new RegExp(U,'i')},
   {url:new RegExp(U,'i')}])
   .select('_id projectTitle url description')
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