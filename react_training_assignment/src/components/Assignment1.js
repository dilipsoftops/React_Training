import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Container,
  Box,
  TextField,
  withStyles,
  createStyles,
  Typography,
} from "@material-ui/core";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "25%",
  },
}));

class Assignment1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main" maxWidth="sm">
          <Box className={classes.container}>
            <TextField
              margin="normal"
              fullWidth
              label="Enter your name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <Typography variant="h4" align="center">
              {this.state.name ? `your name is ${this.state.name}` : ""}
            </Typography>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Assignment1);
