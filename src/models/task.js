const mongoose = require('mongoose');

const { Schema } = mongoose;

const task = new Schema({
    project_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    task_name : {
        type:String,
        required:true
    },
    task_start_date:{
        type:Date
    },
    task_end_date:{
        type:Date
    },
    assigned_to:{
        type:String,
        required:true
    }

});

module.exports =  mongoose.model('Task',task)