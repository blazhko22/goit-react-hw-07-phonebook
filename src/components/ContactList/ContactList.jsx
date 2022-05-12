import Filter from '../Filter';
import ContactsItem from '../ContactsItem';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/contact';

import s from "./ContactList.module.css";

function ContactList() {

  const contacts = useSelector(contactSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <ul className={s.list}>
      {contacts.map(contact => {
          return <ContactsItem key={contact.id} contact={contact}></ContactsItem>;
        })}
      </ul>
    </div>
  );
}

export default ContactList;