import {React, useState} from 'react'
import { Box, TextField, Grid, CssBaseline, Divider, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import forgot from "../Assets/WhatsApp Image 2024-06-07 at 22.16.04_.jpg"




const Forgot = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <div  className='container'>
      <div className='row'>
        <div style={{padding:"25px"}}className='col-sm-6'>
    <Toolbar/>
        <div style={{cursor:'pointer'}} onClick={()=>navigate("/Login")}>
        <FaChevronLeft style={{color:"#FF6600"}} />&emsp;Back to Login
        </div><br/>

        <h1 style={{color:"#FF6600"}}>Forgot your password?</h1>
        <Box height={8}/>
        <p>Don't worry, happens to all of us. Enter your email below to recover your password. </p>
        <Box height={8}/>


        <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>
        <Grid container spacing={2}>

            <Grid item xs={12} >
              <TextField
                id="outlined-required"
                required
                label="Email"
                size='small'
                sx={{ minWidth: "100%" }}
              />
              </Grid>
            </Grid>
            </div><br/>
            
            

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button className='btn' style={{backgroundColor:"#FF6600", color:"#FFFFFF",}} onClick={()=>navigate("/Set Password")}>Submit</button>
            </div>
            <Box height={10}/>
            <Divider>or Login with</Divider>
            <br/>
            <div className='container-fluid' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className='row'>
            <div className='col-4'>
                <div className='btn' style={{border: "2px solid ",backgroundColor: "white",  padding: "6px 24px",borderColor:"#FF6600"}} onClick={()=>navigate("/")}><FaFacebook /></div>
            </div>

            <div className='col-4'>
                <div className='btn' style={{border: "2px solid ",backgroundColor: "white",  padding: "6px 24px",borderColor:"#FF6600"}} onClick={()=>navigate("/")}><FaGoogle /></div>
            </div>
            <div className='col-4'>
                <div className='btn' style={{border: "2px solid ",backgroundColor: "white",  padding: "6px 24px",borderColor:"#FF6600"}} onClick={()=>navigate("/")}><FaApple /></div>
            </div>
            </div>
            </div>

      </div>
        <div className='col-sm-6'>
        <img style={{width:"100%", height:"100vh",objectFit:"fill"}} src={forgot} alt='signup'/>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Forgot



