import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Setpass from './Components/Setpass';
import Signup from './Components/Signup';
import Verify from './Components/Verify';
import Login from './Components/Login';
import Forgot from './Components/Forgot';


const Main = () => {



  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/'                element={<Signup/>}/>
        <Route exact path='/Verify code'     element={<Verify/>}/>
        <Route exact path='/Login'           element={<Login/>}/>
        <Route exact path='/Forgot Password' element={<Forgot/>}/>
        <Route exact path='/Set password'    element={<Setpass/>}/>
    </Routes>
    </BrowserRouter> 
    </>
    )
}

export default Main