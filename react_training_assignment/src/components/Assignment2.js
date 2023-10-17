import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Container,
  TextField,
  Box,
  withStyles,
  createStyles,
} from "@material-ui/core";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "25%",
  },
}));

class Assignment2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  getNameNthTime = () => {
    let arr = [];
    for (let i = 0; i < this.state.value; i++) {
      arr.push("softops" + "\n");
    }
    return arr;
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
              label="enter any number"
              type="number"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </Box>
          <h3>{this.getNameNthTime()}</h3>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Assignment2);
