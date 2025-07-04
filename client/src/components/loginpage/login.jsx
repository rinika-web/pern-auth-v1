import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import google from "../../assets/google.png";
import separator from "../../assets/Separator.png";
import "./login.css";
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShow((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3006/api/v1/login', {
        email,
        password
      });

      navigate('/timer');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div className='main-page'>
      <div className='Title'>
        <h1>Login to your account</h1>
        <p>Please sign in to your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='Input_email'>
          <label>Email Address</label>
          <div className='input'>
            <TextField
              type="email"
              placeholder='Enter Email'
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
          </div>
        </div>

        <div className='Input_password_login'>
          <label>Password</label>
          <div className='password-wp_login'>
            <TextField
              id="pass"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              variant="outlined"
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>

        <div className='Forgot_password'>
          <Link to="/forgot-password" className="link">Forgot password?</Link>
        </div>

        <div className='in_button_login'>
          <button type="submit">Sign in</button>
        </div>

        <div className='separator'>
          <span>
            <img src={separator} alt='separator' />
          </span>
        </div>

        <div className='google_login'>
          <button type="button">
            <img src={google} alt="google" />
          </button>
        </div>

        <div className='register'>
          <p>Don't have an account?{' '}
            <Link to='/register' className='link'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
