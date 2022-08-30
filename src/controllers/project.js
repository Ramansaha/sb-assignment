const Project = require('../models/project');


// creating project
exports.createProject = (req,res)=>{
    console.log('project creation route',req.body);
    const project = new Project(req.body);

    project.save((err,savedProject)=>{
        if(err){
            return res.status(500).json({success:false,err})
        }
        return res.status(201).json({success:true,data:savedProject})
    });
}



// getting project by project id
exports.getProject = (req,res)=>{
    const projectId = req.params.projectId;
    Project.findOne({_id:projectId},(err,data)=>{
        if(err){
            return res.status(500).json({success:false,err})
        }
        else
        if(data ===null){
            return res.status(404).json({success:false,err:'No record found'})
        }
        else{
            return res.status(200).json({success:true,data})
        }
    })
}


// project update call
exports.updateProject = (req,res)=>{
    const projectId = req.params.projectId;
    Project.updateOne({_id:projectId},
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