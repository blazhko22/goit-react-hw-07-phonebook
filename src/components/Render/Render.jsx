import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

import s from './Render.module.css';

function Render() {
  return (
    <div className={s.render}>
      <div>
        <h1 className={s.titleFhonebook}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={s.titleContacts}>Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
}

export default Render;