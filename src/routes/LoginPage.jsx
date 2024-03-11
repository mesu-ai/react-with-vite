import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});

  const navigate= useNavigate();

  const handleBlur =(e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const newData = {...loginData, [name]: value};
    setLoginData(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/contacts');

    console.log(loginData);


  }

 

  return (
    <div>
      <h1 style={{fontSize:'30px'}}>Login Existing User</h1>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth:'300px' }} onSubmit={handleSubmit}>
        <input type="text" name="email" id="email" placeholder='Email' style={{padding:'5px'}} onBlur={handleBlur}/>
        <input type="password" name="password" id="password" placeholder='Password' style={{padding:'5px'}} onBlur={handleBlur}/>
        <button type="submit" style={{ backgroundColor: 'green', padding: '4px', color: 'white' }} >Login</button>
      </form>

      <p>Haven't any accout ? <Link to='/register'><span>Register Now</span></Link> </p>

    </div>
  );
};

export default LoginPage;