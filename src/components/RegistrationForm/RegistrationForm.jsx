import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        {error && <div>{error}</div>}
      </Form>
    </Formik>
  );
}
