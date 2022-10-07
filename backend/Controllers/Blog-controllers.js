const { default: mongoose } = require('mongoose');
const Blog=require('../Model/Blog')
const User=require('../Model/User')
const getAllBlogs=async(req,res)=>{
  let blogs;
  try{
    blogs=await Blog.find().populate("user")
  }catch(err){
    console.log(err)
  }
  if(!blogs){
    res.status(404).json({message:`blogs not found`})
  }
  return res.status(200).json({blogs})
}
const addBlog=async(req,res)=>{
    const {title,description,image,user}=req.body
    let existingUser;
    try{
        existingUser=await User.findById(user)
    }catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({meassage:`unable to find user by id`})
    }
    const blog=new Blog({title,description,image,user})
 try{
       const session=await mongoose.startSession()
       session.startTransaction()
       await blog.save({session})
       existingUser.blogs.push(blog)
       await existingUser.save({session})
       await session.commitTransaction()
    }catch(err){
        console.log(err)
    }
    res.status(200).json({message:`added sucessfully`,blog})
}
const updateBlog=async(req,res)=>{
    const blogId=req.params.id
    const {title,description}=req.body
    let blog;
    try{
        blog=await Blog.findByIdAndUpdate(blogId,{title,description})
    }catch(err){
        console.log(err)
    }
    if(!blog){
        return res.status(400).json({message:`unable to update blog`})
    }
    return res.status(200).json({message:`updated sucessfully`,blog})
}
const getByid=async(req,res)=>{
    const id=req.params.id
    let blog;
    try{
        blog=await Blog.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!blog){
        return res.status(400).json({message:`blog not found`})
    }
    res.status(200).json({blog})
}
const deleteBlog=async(req,res)=>{
    const id=req.params.id
    let blog;
    try{
        blog=await Blog.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(blog)
        await blog.save();
    }catch(err){
        console.log(err)
    }
    if(!blog){
        return res.status(500).json({message:`unable to delete`})
    }
    return res.status(200).json({message:`deleted sucessfully`})
}
const getBlogsBYUserId=async(req,res)=>{
    const userId=req.params.id;
    let userBlogs;
    try{
        userBlogs=await User.findById(userId).populate("blogs")
    }catch(err){
        console.log(err)
    }
    if(!userBlogs){
        return res.status(404).json({message:`no blogs found`})
    }
    return res.status(200).json({blogs:userBlogs})
}
exports.getAllBlogs=getAllBlogs
exports.addBlog=addBlog
exports.updateBlog=updateBlog
exports.getByid=getByid
exports.deleteBlog=deleteBlog
exports.getBlogsBYUserId=getBlogsBYUserId