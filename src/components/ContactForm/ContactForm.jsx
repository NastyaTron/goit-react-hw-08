import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
});
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.modal}>
        <div className={css.field}>
          <label className={css.label}>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className={css.field}>
          <label className={css.label}>Number</label>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </div>
        <div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
