const User=require('../Model/User')
const bcrypt=require('bcryptjs')
 const getAllUsers=async(req,res)=>{
    let users;
    try{
        users=await User.find()
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(400).json({message:`user not found`})
    }
    return res.status(200).json({users})
}
const signUp=async(req,res)=>{
    const {name,email,password}=req.body
    const hashedPassword=bcrypt.hashSync(password)
    let existingUser;
    try{
        existingUser=await User.findOne({email:email})
    }catch(err){
        console.log(err)
    }
    if(existingUser){
    return res.status(403).json({message:`user allreday exist`})
    }
    const user=new User({name,email,password:hashedPassword,blogs:[]})
    try{
       await user.save()
    }catch(err){
        console.log(err)
    }
    res.status(201).json({user})
}
const login=async(req,res)=>{
    const {email,password}=req.body
    let existingUser;
    try{
        existingUser=await User.findOne({email:email})
    }catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(403).json(`user not found`)
    }
    const passwordCorrect=bcrypt.compareSync(password,existingUser.password)
    if(!passwordCorrect){
        return res.status(401).json({message:`password do not match`})
    }
    return res.status(200).json({message:`login sucessfully`,user:existingUser})
}

exports.getAllUsers=getAllUsers
exports.signUp=signUp
exports.login=login
