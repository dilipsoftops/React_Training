import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Container,
  TextField,
  Typography,
  createStyles,
  withStyles,
  Button,
} from "@material-ui/core";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "25%",
  },
}));

class Assignment3 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", finalValue: "" };
  }

  handleClick = (e) => {
    let temp = this.state.finalValue + this.state.value;
    this.setState({
      finalValue: temp,
      value: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main" maxWidth="sm">
          <Box className={classes.container}>
            <TextField
              margin="normal"
              fullWidth
              label="enter any text"
              type="text"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <Button variant="contained" onClick={this.handleClick}>
              Add
            </Button>
          </Box>
          <Typography variant="h3" align="center">
            {this.state.finalValue}
          </Typography>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Assignment3);
