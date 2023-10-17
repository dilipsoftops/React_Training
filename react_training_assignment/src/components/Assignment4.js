import React, { Component } from "react";

import {
  Container,
  TextField,
  Button,
  createStyles,
  withStyles,
  Grid,
} from "@material-ui/core";

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: theme.spacing(2),
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  btn: {
    marginRight: "5px",
  },
}));

class Assignment4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      editingIndex: -1,
    };
  }

  handleSubmit = () => {
    if (this.state.editingIndex !== -1) {
      let updatedData = [...this.state.data];
      updatedData[this.state.editingIndex] = this.state.name;
      this.setState({
        ...this.state,
        data: updatedData,
        editingIndex: -1,
      });
    } else {
      this.setState({
        data: [...this.state.data, this.state.name],
      });
    }
    this.setState({ name: "" });
  };

  handleEdit = (index) => {
    this.setState({ name: this.state.data[index], editingIndex: index });
  };

  handleDelete = (index) => {
    let updatedData = [...this.state.data];
    updatedData.splice(index, 1);
    this.setState({ data: updatedData });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main" maxWidth="sm" className={classes.root}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <div className={classes.inputBox}>
                <TextField
                  fullWidth
                  label="Enter any text"
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                {this.state.editingIndex !== -1 ? "Update" : "Add"}
              </Button>
            </Grid>
          </Grid>
          <ul className={classes.list}>
            {this.state.data.map((item, index) => (
              <li key={index} className={classes.listItem}>
                {item}
                <div>
                  <Button
                    onClick={() => this.handleEdit(index)}
                    className={classes.btn}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => this.handleDelete(index)}>
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyles)(Assignment4);
