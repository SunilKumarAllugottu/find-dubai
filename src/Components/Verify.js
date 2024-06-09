import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Grid, CssBaseline, Divider, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaChevronLeft } from "react-icons/fa";
import verify from '../Assets/WhatsApp Image 2024-06-08 at 11.00.36_wertyu.jpg'

const Verify = () => {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  

  return (
    <>
      
      <div  className='container'>
      <div className='row'>
        <div style={{padding:"25px"}} className='col-sm-6'>
      <Toolbar/>
        <div style={{cursor:'pointer'}} onClick={()=>navigate("/Login")}>
        <FaChevronLeft style={{color:"#FF6600"}} />&emsp;Back to Login
        </div><br/>

        <h1 style={{color:"#FF6600"}}>Verify Code</h1>
        <Box height={8}/>
        <p>An authentication code has been sent to your email.</p>
        <Box height={8}/>

        <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Enter Code"
                size='medium'
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
            </Grid><br/>
              <div>
                <p>Didn't receive a code? <span style={{color:'red',cursor:'pointer'}} onClick>Resend</span></p>
              </div>
              <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button className='btn' style={{backgroundColor:"#FF6600", color:"#FFFFFF",}} onClick={()=>navigate("/Login")}>Verify</button>
            </div>

        </div>
        <div className='col-sm-6'>
        <img style={{width:"100%", height:"100vh",objectFit:"fill"}} src={verify} alt='signup'/>
        </div>
        </div>
        </div>
    </>
  )
}

export default Verify