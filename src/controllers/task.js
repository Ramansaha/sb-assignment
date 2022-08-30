const Task = require('../models/task');


// creating task
exports.createTask = (req,res)=>{
    const task = new Task(req.body);

    task.save((err,savedTask)=>{
        if(err){
            return res.status(500).json({success:false,err})
        }
        return res.status(201).json({success:true,data:savedTask})
    });
}


exports.getTask = (req,res)=>{
    const taskId = req.params.taskId;
    Task.findOne({_id:taskId},(err,data)=>{ 
        console.log(data);
        if(err){
            return res.status(500).json({success:false,err})
        }
        else
        if(!data){
            //return res.status(400).json({success:false,err:'No record found'})
            return res.status(404).json({success:false,err:'No record found'})
        }
        else{
            return res.status(200).json({success:true,data})
        }
    })
}


exports.updateTask = (req,res)=>{
    const taskId = req.params.taskId;
    Task.updateOne({_id:taskId},
        {$set:req.body},
        {new:true}
        ,(err,data)=>{ 
        if(err){
            return res.status(500).json({success:false,err})
        }
        else
        if(!data){
            //return res.status(400).json({success:false,err:'No record found'})
            return res.status(404).json({success:false,err:'No record found'})
        }
        else{
            return res.status(200).json({success:true,data})
        }
    })
}

