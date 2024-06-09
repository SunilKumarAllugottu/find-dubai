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
import sign from "../Assets/WhatsApp .jpg"



const Signup = () => {
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
    
      <div >  
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-6'>
          <img style={{width:"100%", height:"100vh",objectFit:"fill"}} src={sign} alt='signup'/>
        </div>


        <div className='col-sm-6'>
          <Toolbar/>
        <h1 style={{color:"#FF6600"}}>Sign up</h1>
        <Box height={8}/>
        <p>Let's get you all set up so you can access your personal account</p>
        <Box height={8}/>


        <div style={{display:'flex',justifyContent:"center", alignItems:'center'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-required"
                required
                label="User Name"
                size='small'
                sx={{ minWidth: "100%" }}
              />
              </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-required"
                required
                label="User Name"
                size='small'
                sx={{ minWidth: "100%" }}
              />
              </Grid>


            <Grid item xs={12} sm={6} >
              <TextField
                id="outlined-required"
                required
                label="User Name"
                size='small'
                sx={{ minWidth: "100%" }}
              />
              </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-required"
                required
                label="User Name"
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


              <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                required
                label="Confirm Password"
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
            </div>
            <br/>
            <div>
            <label>
            <input  type='checkbox'/>
            I agree to all the <span style={{color:'red',cursor:'pointer'}} onClick>Terms</span> and <span style={{color:'red',cursor:'pointer'}} onClick>Privacy policies</span>
            </label>
            </div><br/>

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button className='btn' style={{backgroundColor:"#FF6600", color:"#FFFFFF",}} onClick={()=>navigate("/Verify code")}>Create Account</button>
            </div>

            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
            <label>Already have an account? <span style={{color:'red',cursor:'pointer'}} onClick={()=>navigate("/Login")}>Login</span></label>
            </div>

            <Box height={10}/>
            <Divider>or Sign up with</Divider>
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
      </div>
      </div>
      </div>
    </>
  )
}

export default Signup



