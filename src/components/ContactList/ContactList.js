import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
);

export default ContactList;
