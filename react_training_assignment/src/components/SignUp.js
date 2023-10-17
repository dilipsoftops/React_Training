import {
  Container,
  Typography,
  TextField,
  Button,
  withStyles,
  createStyles,
  Grid,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import React, { Component } from "react";
import { toast } from "react-toastify";

const useStyle = createStyles((theme) => ({
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let user = { ...this.state };
    if (localStorage.getItem(this.state.email)) {
      toast.error("account with this email is already exist");
      return;
    }

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(this.state.email)) {
      toast.error("Please write correct mail id");
      return;
    }

    if (this.state.password.length < 8) {
      toast.error("password should be greater than 8 characters");
      return;
    }

    localStorage.setItem(this.state.email, JSON.stringify(user));
    toast.success("account get created successfully");
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.container}>
          <Typography variant="h3">Sign up</Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter your Name"
              autoComplete="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/">{"Already have an account? Sign In"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyle)(SignUp);
