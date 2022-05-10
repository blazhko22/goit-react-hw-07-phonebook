import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';


import s from './ContactsItem.module.css';

function ContactsItem({ contact }) {
  const { id, name, phone } = contact;
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    toast.success(`Contact ${name} successfully deleted!`);
  };

  return (
    <li className={s.item}>
      {name}: {phone}
      <button className={s.button} type="button" onClick={handleDeleteContact}>
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