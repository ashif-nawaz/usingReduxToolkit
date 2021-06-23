import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import Section from "../UI/Section";
import { PersonOutline } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const useStyles = makeStyles({
  Input: {
    marginBottom: "2rem",
  },
  Form: {
    width: "25%",
    margin: "auto",
  },
});

const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      authActions.onLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        token: "Somet random token",
      })
    );
  };

  return (
    <Section>
      <form className={classes.Form} onSubmit={submitHandler}>
        <div>
          <Typography align="center" gutterBottom color="secondary">
            <PersonOutline />
          </Typography>
        </div>
        <div className={classes.Input}>
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            multiline
            variant="outlined"
            fullWidth
            inputRef={emailRef}
        
          />
        </div>
        <div className={classes.Input}>
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            multiline
            variant="outlined"
            fullWidth
            inputRef={passwordRef}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
            type='submit'
          >
            Login
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default Login;
