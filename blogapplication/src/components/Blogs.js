import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
const Blogs = () => {
  const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    (async()=>{
    const response=await axios.get('http://localhost:3005/blogs')
    console.log(response.data.blogs)
    setBlogs(response.data.blogs)
})()
  },[])
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((el,id)=>{
        return <Blog id={el.id} image={el.image} title={el.title} description={el.description} user={el.user}/>
      })}
    </div>
  )
}

export default Blogs