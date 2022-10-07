
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
const Blog = ({id,image,title,description,user,userId}) => {
  const deleteHandler=()=>{
    (async()=>{
      await axios.delete(`http://localhost:3005/${id}`)
    })();
  }
  return (
    <>
    <div id={id} className='blog'>
       <h2>{title}</h2>
       <h3>{description}</h3>
       <img src={image} alt='pk'/>
       <h4>userName:{user.name}</h4>
      </div>
      <div className='crudbuttons'>
     <Link to={`/myblogs/${user._id}`}><button>UpdateBlog</button></Link> 
      <button onClick={deleteHandler}>DeleteBlog</button>
      </div>
    </>
  )
}

export default Blog