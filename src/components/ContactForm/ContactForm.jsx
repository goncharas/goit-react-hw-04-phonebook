import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ContactFormStyle,
    LabelForm,
    InputForm,
    ButtonForAdd,
} from 'components/ContactForm/ContactForm.styled';


export const ContactForm = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    handleSubmit(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
    
    return (
      <ContactFormStyle onSubmit={onSubmitForm}>
        <LabelForm>Name</LabelForm>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <LabelForm>Number</LabelForm>
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeNumber}
        />
        <ButtonForAdd type="submit">Add contact</ButtonForAdd>
      </ContactFormStyle>
    );
  
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};