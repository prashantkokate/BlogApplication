import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault();
    try{(async()=>{
      const data=await axios.post('http://localhost:3005/signup',{name,email,password})
    })().then(history('/login'))
    }catch(err){
      console.log(err)
    }
    
  }
  return (
    <div className='heading'>
      <h2>SignUP</h2>
      <div>
        <form className='form' onSubmit={submitHandler}>
          <input type='text' placeholder='Enter Name...' onChange={(e)=>setName(e.target.value)}/>
          <input type='text' placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)}/>
          <input type='text' placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/>
          <input type='submit'/>
        </form>
      </div>
    </div>
  )
}

export default SignUp