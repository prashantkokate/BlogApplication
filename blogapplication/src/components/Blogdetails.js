import axios from 'axios'
import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
const Blogdetails = () => {
  const {id}=useParams()
  console.log(id)
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    (async()=>{
      await axios.put(`http://localhost:3005/update/${id}`,{title,description,image})
    })();
  }
  return (
    <div>
      <h2>UpdateBlog</h2>
      <form onSubmit={handleSubmit} className='form'>
      <input type='text'value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
      <input type='text'value={description} placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
      <input type='text'value={image} placeholder='ImageUrl' onChange={(e)=>setImage(e.target.value)}/>
      <input type='submit'/>
      </form>
    </div>
  )
}

export default Blogdetails