import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Name, Button } from '../styles/ListStyles';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Name>{contact.name}:</Name> {contact.number}
          <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
