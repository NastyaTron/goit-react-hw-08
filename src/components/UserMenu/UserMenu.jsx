import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <nav>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        color="inherit"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </nav>
  );
}
