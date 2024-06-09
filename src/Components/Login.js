import {React, useState} from 'react'
import { Box, TextField, Grid, CssBaseline, Divider, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import login from "../Assets/WhatsApp Image 2024-06-07 at 22.15.55_.jpg"



const Login = () => {
  const navigate = useNavigate();


  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };


  return (
    <>
    
      <div >  
      <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
        <Toolbar/>
        
        <h1 style={{color:"#FF6600"}}>Login</h1>
        <Box height={8}/>
        <p>Login to access your account</p>
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

              <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Password"
                size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                        edge="end"
                      >
                        {showPassword1 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            </Grid>
            </div>
            
            <div className='container mt-3'>
            <div className='row'>
            <div className='col'>
              <lable>
              <input type='checkbox'/>
            Remember me 
            </lable>
               
        </div>
        <div className='col' style={{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"end"}}>
            <span style={{color:'red',cursor:'pointer'}} onClick={()=>navigate("/Forgot Password")}>Forgot Password</span>
        </div>
        </div>
        </div> <br/>

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button className='btn' style={{backgroundColor:"#FF6600", color:"#FFFFFF",}} onClick={()=>navigate("/")}>Login</button>
            </div>

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
            <label>Don't have an account? <span style={{color:'red',cursor:'pointer'}} onClick={()=>navigate("/")}>Sign Up</span></label>
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
        <img style={{width:"100%", height:"100vh",objectFit:"fill"}} src={login} alt='signup'/>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Login



