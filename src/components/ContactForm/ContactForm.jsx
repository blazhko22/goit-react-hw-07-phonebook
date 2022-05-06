import { addContact } from '../../redux/actions';
import { getItems } from '../../redux/selectors';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

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

    if (contacts.some(contact => contact.name === name)) return alert(`${name} is already in contacts`);

    dispatch(addContact(name, number));

    e.currentTarget.reset();
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
