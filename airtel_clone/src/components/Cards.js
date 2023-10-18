import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";

const useStyles = createStyles({
  root: {
    maxWidth: 400,
    marginBottom: "50px",
  },
});

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  width: "80%",
  marginTop: "24px",
});

class Cards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography align="center" style={{ fontSize: "32px", marginTop: "15px" }}>
          Recommended for you
        </Typography>
        <Wrapper>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="190"
                image="https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-1.png"
              ></CardMedia>
              <CardContent>
                <Typography color="red" variant="h6" component="h2">
                  FIBER
                </Typography>
                <Typography>Enjoy unlimited wi-fi at ₹999</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Up to 200 Mbps speed, unlimited calls & OTT apps
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" variant="contained" color="secondary" sx={{ borderRadius: "100px" }}>
                Buy Now
              </Button>
              <Button size="medium" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="190"
                image="https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-2.png"
              ></CardMedia>
              <CardContent>
                <Typography color="red" variant="h6" component="h2">
                  POSTPAID
                </Typography>
                <Typography>Get a superior network at just ₹499</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  75 GB data with no daily limit & top OTT apps
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" variant="contained" color="secondary" sx={{ borderRadius: "100px" }}>
                Buy Now
              </Button>
              <Button size="medium" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="190"
                image="https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-3.png"
              ></CardMedia>
              <CardContent>
                <Typography color="red" variant="h6" component="h2">
                  PREPAID
                </Typography>
                <Typography>Enjoy high-speed, seamless network</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Home delivery of SIM & Quick activation
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" variant="contained" color="secondary" sx={{ borderRadius: "100px" }}>
                Buy Now
              </Button>
              <Button size="medium" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Wrapper>
      </>
    );
  }
}

export default withStyles(useStyles)(Cards);
