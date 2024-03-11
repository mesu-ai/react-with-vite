import React from 'react';
import { contactlists } from '../assets/datas/contactlists';

const ContactList = () => {
  return (
    <div>
      <h1>Contact List</h1>

      <ul>
        {contactlists.map((contact, index) =>
          <li key={index}>
            <p>{contact?.name}</p>
          </li>
        )}
      </ul>


      
    </div>
  );
};

export default ContactList;