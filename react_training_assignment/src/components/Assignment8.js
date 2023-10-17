import React, { Component } from "react";

import {
  Container,
  createStyles,
  withStyles,
  TextField,
  Button,
} from "@material-ui/core";

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

class Assignment8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      open: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length === 0) {
      toast.error("enter your name");
      return;
    }

    if (this.state.email.length === 0) {
      toast.error("enter your email");
      return;
    }

    if (this.state.password.length < 8) {
      toast.error("password  should be greater than 8");
      return;
    }

    if (this.state.confirmPassword.length < 8) {
      toast.error("confirm password should be greater than 8");
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      toast.error("Password and confirm password is not matching");
      return;
    }

    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;

    for (let i = 0; i < this.state.password.length; i++) {
      if (this.state.password[i] >= "A" && this.state.password[i] <= "Z") {
        countUpperCase++;
      } else if (
        this.state.password[i] >= "a" &&
        this.state.password[i] <= "z"
      ) {
        countLowerCase++;
      } else if (!isNaN(this.state.password[i] * 1)) {
        countDigit++;
      }
    }

    if (countUpperCase === 0) {
      toast.error("password must contain capital letter");
      return;
    }

    if (countLowerCase === 0) {
      toast.error("password must contain lower  letter");
      return;
    }

    if (countDigit === 0) {
      toast.error("password must contain digit ");
      return;
    }

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(this.state.email)) {
      toast.error("email is not correct");
      return;
    }

    toast.error("form is successfully valid");
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Container component="main" maxWidth="xs">
          <div className={classes.container}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter your first Name"
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
                label="enter your email"
                autoComplete="email"
                name="email"
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Validate
              </Button>
            </form>
          </div>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Assignment8);
