import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
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

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
