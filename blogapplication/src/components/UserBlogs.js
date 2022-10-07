import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
const UserBlogs = () => {
  const [blogs,setBlogs]=useState([])
  const id=localStorage.getItem('userId')
  useEffect(()=>{
    (async()=>{
      const data=await axios.get(`http://localhost:3005/blogs/${id}`)
      setBlogs(data.data.blogs.blogs)
     
    })()
  },[id])
  
  return (
    <div>
     <h2>UserBlogs</h2> 
     {blogs.map((el,id)=>{
        return <Blog id={el.id} image={el.image} title={el.title} description={el.description} user={el.user}/>
      })}
    </div>
  )
}

export default UserBlogs