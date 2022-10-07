const userControlles=require('../Controllers/User-controllers')
const express=require('express')
const router=express.Router()


router.get('/users',userControlles.getAllUsers)
router.post('/signup',userControlles.signUp)
router.post('/login',userControlles.login)
module.exports=router