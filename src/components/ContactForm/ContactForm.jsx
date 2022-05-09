import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from '../../redux/contactsSlice';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  const onChengeValue = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchContact = data.some(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });
    if (searchContact) {
      toast.error(`${name} is alredy in contacts!!!`);
      return;
    }

    addContact({ name, number });
    toast.success(`${name} has added to contacts list`);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={onChengeValue}
          required
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={onChengeValue}
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
