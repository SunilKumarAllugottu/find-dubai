import {React, useState} from 'react'
import { Box, TextField, Grid, CssBaseline, Divider, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import pass from '../Assets/WhatsApp Image 2024-06-08 at 11.00.36_.jpg'



const Setpass = () => {
  const navigate = useNavigate();

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2= () => setShowPassword2((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <>
    
      <div  className='container'>
      <div className='row'>
        <div style={{padding:"25px"}}className='col-sm-6'>
    <Toolbar/>
        <div style={{cursor:'pointer'}} onClick={()=>navigate("/Login")}>
        <FaChevronLeft style={{color:"#FF6600"}} />&emsp;Back to Login
        </div><br/>

        <h1 style={{color:"#FF6600"}}>Set a password</h1>
        <Box height={8}/>
        <p>Your previous password has been reset. Please set a new password for your account </p>
        <Box height={8}/>


        <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>
        <Grid container spacing={2}>
        

        <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Create Password"
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


              <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Re-enter Password"
                size='small'
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Grid>

        </Grid>
        </div><br/>
            
            

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button className='btn' style={{backgroundColor:"#FF6600", color:"#FFFFFF",}} onClick={()=>navigate("/Login")}>Submit</button>
            </div>
      </div>
        <div className='col-sm-6'>
        <img style={{width:"100%", height:"100vh",objectFit:"fill"}} src={pass} alt='signup'/>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Setpass



