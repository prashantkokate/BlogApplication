const express=require('express')
const blogControllers=require('../Controllers/Blog-controllers')
const blogrouter=express.Router()
blogrouter.get('/blogs',blogControllers.getAllBlogs)
blogrouter.post('/add',blogControllers.addBlog)
blogrouter.put('/update/:id',blogControllers.updateBlog)
blogrouter.get('/:id',blogControllers.getByid)
blogrouter.delete('/:id',blogControllers.deleteBlog)
blogrouter.get('/blogs/:id',blogControllers.getBlogsBYUserId)
module.exports=blogrouter