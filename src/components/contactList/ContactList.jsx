import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) => {
    if (contact.name && typeof contact.name === "string") {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return false;
  });

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
