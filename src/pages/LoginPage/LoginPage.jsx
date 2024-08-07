import LoginForm from "../../components/LoginForm/LoginForm";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function LoginPage() {
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
        <LoginForm />
      </Box>
    </Container>
  );
}
