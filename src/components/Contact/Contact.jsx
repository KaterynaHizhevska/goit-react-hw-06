import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Видалити
      </button>
    </div>
  );
}

export default Contact;