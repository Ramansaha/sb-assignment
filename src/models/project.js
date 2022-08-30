
const mongoose = require('mongoose');

const { Schema } = mongoose;

const project = new Schema({
    project_name : {
        type:String,
        required:true
    },
    project_start_date:{
        type:Date,
    },
    project_end_date:{
        type:Date,
    },
    project_head:{
        type:String,
        required:true
    }

});

module.exports =  mongoose.model('Project',project)