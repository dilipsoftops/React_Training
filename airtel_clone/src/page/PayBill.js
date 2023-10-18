import { Divider, TextField, Typography, createTheme, Button } from "@material-ui/core";
import React, { Component } from "react";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    tomato: "#FF6347",
    pink: {
      deep: "#FF1493",
      hot: "#FF69B4",
      medium: "#C71585",
      pale: "#DB7093",
      light: "#FFB6C1",
    },
  },
});

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  ${theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

const StyledLeftDiv = styled.div`
  height: 91vh;
  width: 35%;
  background-color: #f6f6f6;
  display:flex ${theme.breakpoints.down("xs")} {
    height: 50px;
    background-color: #fff;
    width: 100%;
  }
`;

const StyledRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 250px;
`;

const StyledLeftTypo = styled.div` 
	margin:20% 65%;
	height: auto;,
	width: 350px;,
	display:flex;
	flex-direction:column;
	${theme.breakpoints.down("xs")} {
		flex-direction:row;
	  }
`;

class PayBill extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Divider />
        <StyledDiv>
          <StyledLeftDiv>
            <StyledLeftTypo>
              <div>
                <Typography>Airtel Black Bill Payment</Typography>
                <Typography>Let's get your bill payment done!</Typography>
              </div>
              <img
                src={"https://assets.airtel.in/static-assets/acp/common/bookmark.svg"}
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "contain",
                }}
                alt=""
              />
            </StyledLeftTypo>
          </StyledLeftDiv>

          <StyledRightDiv>
            <Typography paragraph style={{ fontSize: "32px" }}>
              View & Pay your bill
            </Typography>
            <TextField variant="outlined" label="Enter Registred Mobile Number" fullWidth />
            <br />
            <Typography paragraph>LOCATE THESE DETAILS</Typography>
            <Button variant="contained" color="danger" style={{ backgroundColor: "#e40000", color: "white" }}>
              Verify with OTP
            </Button>
          </StyledRightDiv>
        </StyledDiv>
      </>
    );
  }
}

const StyledNav = styled.nav`
  width: 100%;
  height: 35px;
  padding: 18px;
  margin-left: 25em;
  ${theme.breakpoints.down("sm")} {
    margin-left: 0px;
    padding: 20px;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  zoom: 1;
  object-fit: cover;
  left: 100px;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <StyledNav>
          <StyledImg src={"https://assets.airtel.in/static-assets/acp/common/logo-red.svg"}></StyledImg>
        </StyledNav>
      </>
    );
  }
}

export default PayBill;
