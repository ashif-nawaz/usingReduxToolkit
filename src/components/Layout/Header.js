import { Button, IconButton, Typography } from "@material-ui/core";
import { ShoppingCart, Person } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import Styles from "./Header.module.css";


const Header = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
      dispatch(authActions.onLogout());
  }

  return (
    <header className={Styles.Header}>
      <div className={Styles.Toolbar}>
        <NavLink to="/" className={Styles.Link}>
          <Typography variant="h4" component="h5" color="secondary">
            Redux
          </Typography>
        </NavLink>

        <ul className={Styles.Navlist}>
          <li>
            <NavLink to="/shop" className={Styles.Link}>
              <Button color="secondary">Shop</Button>
            </NavLink>
          </li>
        </ul>
        {isLoggedIn && (
          <NavLink to="/cart" className={Styles.Link}>
            <IconButton color="secondary">
              <ShoppingCart />
            </IconButton>
          </NavLink>
        )}

        {isLoggedIn && <Button onClick={logoutHandler} color='secondary' variant='outlined'>Logout</Button>}

        <NavLink to="/login" className={Styles.Link}>
          <IconButton color="secondary">
            <Person />
          </IconButton>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
