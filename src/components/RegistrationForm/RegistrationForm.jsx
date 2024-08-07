import { ErrorMessage, Form, Formik } from "formik";
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

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      {({ errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
              Registration
            </Typography>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              type="username"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="username" />}
              error={touched.username && Boolean(errors.username)}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="email" />}
              error={touched.email && Boolean(errors.email)}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="password" />}
              error={touched.password && Boolean(errors.password)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Register
            </Button>
            {error && <div>{error}</div>}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
