const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const projectSchema = new Schema({
   projectTitle:String,
   url:String,
   description:String

});




module.exports =mongoose.model('project',projectSchema,'projects');