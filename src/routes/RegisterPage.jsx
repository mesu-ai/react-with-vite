import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({});

  const handleBlur =(e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const newData = {...registerData, [name]: value};
    setRegisterData(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(registerData);
    
  }

 

  return (
    <div>
      <h1 style={{fontSize:'30px'}}>Register New User</h1>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth:'300px' }} onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" placeholder='Username' style={{padding:'5px'}} onBlur={handleBlur}/>
        <input type="email" name="email" id="email" placeholder='Email' style={{padding:'5px'}} onBlur={handleBlur}/>
        <input type="password" name="password" id="password" placeholder='Password' style={{padding:'5px'}} onBlur={handleBlur}/>
        <button type="submit" style={{ backgroundColor: 'green', padding: '4px', color: 'white' }} >Login</button>
      </form>

      <p>Have a accout ? <Link to='/login'><span>Login Now</span></Link> </p>

    </div>
  );
};

export default RegisterPage;