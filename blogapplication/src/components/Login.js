import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from '../Slice'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useNavigate()
  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault();
    try{(async()=>{
      const data=await axios.post(`http://localhost:3005/login`,{email,password})
      localStorage.setItem('userId',data.data.user._id)
    })().then(history('/myblogs'))
    }catch(err){
      console.log(err)
    }
    dispatch(login({isloggedIn:true}))
  }
  return (
    <div className='heading'>
      <h2>Login</h2>
      <div>
        <form className='form' onSubmit={submitHandler}>
          <input type='text' value={email} placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)}/>
          <input type='text' value={password} placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)}/>
          <input type='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Login

    