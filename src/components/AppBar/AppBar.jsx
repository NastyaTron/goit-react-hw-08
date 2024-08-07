import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export default function CustomAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "auto" }}
        >
          {" "}
          <Navigation />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          {" "}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
