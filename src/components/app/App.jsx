import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

const App = () => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <div className={css.contactsWrapper}>
        <SearchBox />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
