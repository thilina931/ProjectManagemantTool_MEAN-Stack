const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const projectSchema = new Schema({
   taskname:String,
   member:String,
   allocatedDate:Date,
   Duedate:Date,
   description:String

});




module.exports =mongoose.model('task',projectSchema,'tasks');