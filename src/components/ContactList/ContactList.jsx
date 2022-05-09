import Filter from '../Filter';
import ContactsItem from '../ContactsItem';

import { useGetContactsQuery } from '../../redux/contactsSlice';

import { useSelector } from 'react-redux';
import s from "./ContactList.module.css";

function ContactList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.value);

  const filterVisibleContacts = data?.filter(({ name }) =>
  name.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <div>
      <Filter />
      <ul className={s.list}>
      {filterVisibleContacts &&
        filterVisibleContacts.map(contact => {
          return <ContactsItem key={contact.id} contact={contact}></ContactsItem>;
        })}
      </ul>
    </div>
  );
}

export default ContactList;