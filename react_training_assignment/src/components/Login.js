import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ handleChange }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    console.log(handleChange);
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem(data.email));
    if (user !== null) {
      if (data.password === user.password) {
        handleChange(data.email, true);
        toast.success("Login Success!");
        navigate("/Assignment1");
      } else {
        toast.error("Invalid password");
      }
    } else {
      toast.error("Please enter valid credentials");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.container}>
        <Typography variant="h3">Sign in</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
