import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function RegistrationPage() {
  const loading = useSelector(selectAuthLoading);
  const isError = useSelector(selectAuthError);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        {loading && <Loader />}
        {isError && <p>Such user is already registered</p>}
        {!loading && !isError && <h2>Pegister your account</h2> && (
          <RegistrationForm />
        )}
      </Box>
    </Container>
  );
}
