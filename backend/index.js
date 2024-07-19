const express=require('express')
const app=express()
const port=3005;
const cors=require('cors')
const mongoose=require('mongoose');
const router=require('./Routes/User-routes')
const blogrouter=require('./Routes/Blog-routes')
app.use(cors())
app.use(express.json())
app.use('/',router)
app.use('/',blogrouter)
mongoose.connect('mongodb+srv://kokatepk123:kokatepk123@cluster0.5thli8a.mongodb.net/?retryWrites=true&w=majority').
then(()=>{
   console.log(`connected to database!`)
}).then(()=>{
    app.listen(port,()=>{
        console.log(`listining on ${port}`)
    })
}).catch((error)=>{console.log(error)})
