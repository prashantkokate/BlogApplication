import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../Slice'
const Header = () => {
  const isloggedIn=useSelector(state=>state.isloggedIn)
  const dispatch=useDispatch()
  return (
    <div className='blogapp'>
        <h2>BlogApp</h2>
        <div className='blogs'>
        <Link to='/myblogs'><button>MyBlogs</button></Link>
        <Link to='/blogs'><button>AllBlogs</button></Link>
        <Link to='/blogs/add'><button>AddBlog</button></Link>
        </div>
        <div className='buttons'>
      { !isloggedIn? (<><Link to='/signup'><button>SignUP</button></Link> 
       <Link to='/login'><button>Login</button></Link></>):null}
       { isloggedIn? (<Link to='/signup'><button onClick={()=>dispatch(logout({isloggedIn:false})).then(()=>window.localStorage.clear())}>Logout</button></Link>):null}
       </div>
    </div>
  )
}

export default Header