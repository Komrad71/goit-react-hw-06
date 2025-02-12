import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.contactContainer}>
        <div className={css.contactWrapper}>
          <FaPhoneAlt color="#007bhf" />
          <p className={css.contactText}>{name}</p>
        </div>
        <div className={css.contactWrapper}>
          <FaUserAlt color="#007bhf" />
          <p className={css.contactText}>{number}</p>
        </div>
      </div>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
