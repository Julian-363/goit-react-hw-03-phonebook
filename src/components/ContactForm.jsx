import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from '../styles/FormStyles';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;

    const nameExists = contacts.some(contact => contact.name === name);

    if (nameExists) {
      alert(`${name} is already added to contacts`);
    } else {
      addContact({ id: nanoid(), name, number });
      this.setState({ name: '', number: '' });
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleNumberChange(e) {
    this.setState({ number: e.target.value });
  }

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel htmlFor="name-input">
          Name:
          <StyledInput
            id="name-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </StyledLabel>
        <StyledLabel htmlFor="number-input">
          Number:
          <StyledInput
            id="number-input"
            type="tel"
            name="number"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
