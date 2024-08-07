import CustomAppBar from "../AppBar/AppBar";

import Container from "@mui/material/Container";

export default function Layout({ children }) {
  return (
    <div>
      <CustomAppBar />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
}
