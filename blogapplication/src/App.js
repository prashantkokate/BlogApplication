import Header from "./components/Header";
import React from "react";
import {Routes,Route} from 'react-router-dom'
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import Addblog from "./components/Addblog";
import UserBlogs from "./components/UserBlogs";
import Blogdetails from "./components/Blogdetails";
function App() {
  return (
    <div>
    <header>
      <Header/>
    </header>
    <Routes>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/add'element={<Addblog/>}/>
      <Route path='/myblogs' element={<UserBlogs/>}/>
      <Route path='/myblogs/:id' element={<Blogdetails/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
