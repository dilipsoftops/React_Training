import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Container,
  Grid,
  withStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  createStyles,
  CardContent,
} from "@material-ui/core";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
  },
  description: {
    maxHeight: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

class Assignment9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products/").then((res) =>
      this.setState({
        data: res.data,
      })
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            {this.state.data.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <ShowData data={item} classes={classes} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}

class ShowData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, data } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            src={data.image}
            alt={data.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.category}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Assignment9);
