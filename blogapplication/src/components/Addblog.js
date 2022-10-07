import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addblog = () => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')
  const histor=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault();
  try{(async()=>{
    await axios.post('http://localhost:3005/add',{title,description,image,user:localStorage.getItem('userId')})
    
  })().then(histor('/myblogs'))
}catch(err){console.log(err)}
}
return (
    <div>
    <h2>Addblog</h2> 
    <form onSubmit={submitHandler} className='form'>
      <input type='text' placeholder='Title'value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type='text' placeholder='Description'value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <input type='text' placeholder='ImageUrl'value={image} onChange={(e)=>setImage(e.target.value)}/>
     <input type='submit'></input>
    </form>
    </div>
  )
}

export default Addblog