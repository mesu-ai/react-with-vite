import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditContact = () => {
  const [editData, setEditData] = useState({});

  const navigate= useNavigate();

  const handleBlur =(e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const newData = {...editData, [name]: value};
    setEditData(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/contacts');

    console.log(editData);


  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <hr />

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '300px' }} onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='Name' style={{ padding: '5px' }} onBlur={handleBlur} />
        <input type="email" name="email" id="email" placeholder='Email' style={{ padding: '5px' }} onBlur={handleBlur} />
        <input type="number" name="phone" id="phone" placeholder='Phone' style={{ padding: '5px' }} onBlur={handleBlur} />
        <textarea name="address" id="address" placeholder='Address' style={{ padding: '5px' }} onBlur={handleBlur} />
    
        <button type="submit" style={{ backgroundColor: 'green', padding: '4px', color: 'white' }} >Update</button>
      </form>
      
    </div>
  );
};

export default EditContact;