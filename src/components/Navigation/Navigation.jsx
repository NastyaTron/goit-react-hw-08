import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import Button from "@mui/material/Button";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Button color="inherit" component={NavLink} to="/">
        Home
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to="/contacts">
          Contacts
        </Button>
      )}
    </nav>
  );
}
