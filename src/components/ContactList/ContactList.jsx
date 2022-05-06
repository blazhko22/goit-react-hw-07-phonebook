import Filter from '../Filter';
import ContactsItem from '../ContactsItem';

import { getItems, getFilter } from '../../redux/selectors';

import { useSelector } from 'react-redux';
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const filterVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  const filteredContacts = filterVisibleContacts(contacts).reverse();

  return (
    <div>
      <Filter />
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;