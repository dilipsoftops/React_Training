import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container, List, Box, ListItem, withStyles } from "@material-ui/core";

const useStyle = (theme) => ({
  container: {
    margin: "25%",
  },
});

class Assignment7 extends Component {
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

  generateRandomColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
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
                  style={{
                    color:
                      this.state.selectedID === id
                        ? this.generateRandomColor()
                        : "",
                  }}
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

export default withStyles(useStyle)(Assignment7);
