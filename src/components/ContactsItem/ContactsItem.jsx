import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions';
import s from './ContactsItem.module.css';

function ContactsItem({ name, number }) {
  const dispatch = useDispatch();
  const deleteContact = e => dispatch(removeContact(e.currentTarget.parentNode.childNodes[0].data));

  return (
    <li className={s.item}>
      {name}: {number}
      <button className={s.button} type="button" onClick={deleteContact}>
        remove
      </button>
    </li>
  );
}

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};