import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min 3 characters")
      .max(50, "max 50 characters")
      .required("Name is required"),
    number: Yup.string().required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      name: String(values.name),
      number: String(values.number),
    };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactFormWrapper}>
        <div className={css.contactFormWrapperField}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={css.contactForm} />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.contactFormWrapperField}>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" className={css.contactForm} />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit" className={css.contactFormBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
