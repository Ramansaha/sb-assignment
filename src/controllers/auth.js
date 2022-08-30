const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).json({success:false,err:'Authorization header required'});
    }
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];
    try {
        const decoded = jwt.verify(token,'kdkjj23')
        console.log("decoded",decoded);
        next()
    } catch (error) {
        return res.status(400).json({success:false,err:error})
    }
}

exports.signIn = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email,password},(err,user)=>{
        if(err){
            return res.status(404).json({success:false,err:'Something went wrong!'})
        }
        else if(user === null){
            return res.status(404).json({success:false,err:'Incorrect email or password!'})

        }
        else{
            const token = jwt.sign({_id:user._id},'kdkjj23',{expiresIn:'2h'});
            res.cookie("token",token)
            return res.status(200).json({success:true,message:'Authenticated successfully!'})
        }
    })
}

exports.signUp = (req,res)=>{
    const user = new User({
        email: req.body.email,
        password:req.body.password
    })
    user.save((err,savedUser)=>{
        if(err){
            return res.status(500).json({success:false,err})
        }
        return res.status(201).json({success:true,data:savedUser})
    });
}

exports.signOut = (req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({status:true,message:'User signed out successfully!'})
    } catch (error) {
        res.status(500).json({status:true,message:'Unable to sign out !'})
    }
}