import PropTypes from 'prop-types';

import { useState } from 'react';
import { useCreateContactMutation } from '../../redux/contactsSlice';

import s from './ContactForm.module.css';

const shortid = require('shortid');
const nameInputId = shortid.generate();
const numberInputId = shortid.generate();

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useCreateContactMutation();

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({name, phone: number,})
    setName('');
    setNumber('');

    e.currentTarget.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={handleChangeName}
          id={nameInputId}
          required
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={handleChangeNumber}
          id={numberInputId}
          required
        />
      </label>
      <button className={s.button} type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
