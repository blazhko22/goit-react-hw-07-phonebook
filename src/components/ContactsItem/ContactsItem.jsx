import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/contact';

import s from './ContactsItem.module.css';

function ContactsItem({contact}) {
  const { id, name, phone } = contact;
    
  const dispatch = useDispatch();
  const handleDeleteContact = id => dispatch(contactOperations.deleteContact(id));

  return (
    <li className={s.item} key={id}>
      {name}: {phone}
      <button 
        className={s.button} 
        type="button" 
        onClick={() => handleDeleteContact(id)}
      >
        remove
      </button>
    </li>
  );
}

export default ContactsItem;

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};