import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Container,
  List,
  Box,
  ListItem,
  withStyles,
  createStyles,
} from "@material-ui/core";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "25%",
  },
}));
class Assignment5 extends Component {
  people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedID: -1,
    };
  }

  handleClick = (id) => {
    this.setState({
      selectedID: id,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main" maxWidth="sm">
          <Box className={classes.container}>
            <List>
              {this.people.map(({ id, name }) => (
                <ListItem
                  onClick={() => this.handleClick(id)}
                  key={id}
                  style={{ color: this.state.selectedID === id ? "red" : "" }}
                >
                  {name}
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyle)(Assignment5);
