import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

export default function AuthNav() {
  return (
    <nav>
      <Button color="inherit" component={NavLink} to="/register">
        Register
      </Button>
      <Button color="inherit" component={NavLink} to="/login">
        Log In
      </Button>
    </nav>
  );
}
