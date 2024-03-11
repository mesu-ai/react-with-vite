import React from 'react';
import { contactlists } from '../assets/datas/contactlists';
import { Link } from 'react-router-dom';

const ContactList = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/contact/add" style={{background:'green', color:'white', padding:'4px 8px', borderRadius:'5px'}}>Add Contact</Link>
     
      <hr />
      <ul style={{padding:'0'}}>
        {contactlists.map((contact, index) =>
          <li key={index} style={{ background: '#f5f7f6', padding: '5px', listStyle: 'none', marginTop: '10px' }}>
            <p style={{margin:0}}>{contact?.name}</p>
            <p style={{margin:0}}>{contact?.email}</p>
            <p style={{margin:0}}>{contact?.phone}</p>
            <p style={{margin:0}}>{contact?.address}</p>
           
            <Link to={`/contact/edit/${contact?.id}`} style={{ fontSize: '14px', background: 'blue', color: 'white', margin: '0px 5px', padding:'2px 10px', borderRadius:'5px' }}>
              Edit
            </Link>
            <button type="button" style={{fontSize:'14px', background: 'red', color:'white', margin:'0px 5px' }}>Delete</button>

          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;