import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { Component } from "react";
import styled from "styled-components";

const useStyle = createStyles((theme) => ({
  section: {
    width: "80%",
    margin: "auto",
  },
}));

const StyledWrapper = styled(Box)`
  display: flex;
`;

class PrepaidSim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionData: [],
    };
  }
  render() {
    var data = [
      {
        heading: "Quick Access",
        subHeading: [
          "Airtel Black Bill Payment",
          "Prepaid Recharge",
          "Postpaid Bill Payment",
          "DTH Recharges",
          "Broadband Payment",
          "Exciting Offers",
          "Personal Loans",
          "Airtel Payments Bank",
          "Airtel Thanks App",
          "Free Sim Delivery",
          "Telecom Tariff",
          "Rights Issue",
          "QIP & FCCB Issue",
          "Terms & Conditions",
          "Airtel Blogs",
        ],
      },
      {
        heading: "Help At Hand",
        subHeading: [
          "Find a store",
          "Check Coverage",
          "Ownership Transfer",
          "Manage Your account",
          "ISP Near Me",
          "Wynk Music",
          "Broadband FAQs",
          "DTH FAQs",
          "Airtel Xstream FAQs",
          "Postpaid FAQs",
          "Stores near me",
          "DTH Consumer Corner",
          "Do not disturb",
        ],
      },
      {
        heading: " About Airtel",
        subHeading: [
          "Brand",
          "Career",
          "Partner",
          "Business",
          "About Airtel",
          "Press Release",
          "Investor",
          "Investor Support",
          "Telecom Charter",
        ],
      },
      {
        heading: " New Connections",
        subHeading: [
          "Buy DTH New Connection",
          "Buy Prepaid New Connection",
          "Buy Postpaid New Connection",
          "Buy Fiber New Connection",
          "Buy Airtel Black Plan",
          "Buy Xstream Box",
          "Switch to Airtel",
          "International Roaming",
        ],
      },
    ];

    return (
      <>
        <Navbar />
        <Box bgcolor="#f6f6f6">
          <Box display="flex" width="90%">
            <Box
              width="50%"
              height="50%"
              bgcolor="#f6f6f6"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              marginRight="20px"
            >
              <Box textAlign="start" width="50%">
                <h1>
                  Join us on <span style={{ color: "red" }}>Airtel Prepaid</span> <br />
                  We are imporving every day
                </h1>

                <ul style={{ display: "flex", listStyle: "none", gap: "10px", justifyItems: "start" }}>
                  <li> DoorStep KYC</li>
                  <li>Same day SIM delivery</li>
                  <li>Quick Activation</li>
                </ul>
                <Typography> *currently available in selected cities only</Typography>
                <Box
                  padding="16px"
                  background="white"
                  borderRadius="8px"
                  border="1px solid red"
                  height="120px"
                  boxShadow="0 1px 4px rgba(0,0,0,0.1)"
                  marginTop="10px "
                >
                  <Box display="flex" justifyContent="space-between">
                    <p>
                      Rs.299 <br />
                      Truly unlimited Calls
                    </p>
                    <p>
                      1.5 GB <br />
                      Per day
                    </p>
                    <p>
                      28 days <br />
                      validity
                    </p>
                    <Button>Selected</Button>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="p">Apollo 24 | 7 circle</Typography>
                    <p style={{ color: "red" }}>& 4 more {">"}</p>
                  </Box>
                </Box>

                <Box
                  padding="16px"
                  background="white"
                  borderRadius="8px"
                  border="1px solid red"
                  height="120px"
                  boxShadow="0 1px 4px rgba(0,0,0,0.1)"
                  marginTop="10px"
                >
                  <Box display="flex" justifyContent="space-between">
                    <p>
                      Rs.299 <br />
                      Truly unlimited Calls
                    </p>
                    <p>
                      1.5 GB <br />
                      Per day
                    </p>
                    <p>
                      28 days <br />
                      validity
                    </p>
                    <Button>Selected</Button>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between">
                    <p>Apollo 24 | 7 circle</p>
                    <p style={{ color: "red" }}>& 4 more {">"} </p>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box padding="50px 30px 80px 56px" width="50%" bgcolor="white" display="flex" flexDirection="column">
              <form action="">
                <p style={{ fontSize: "24px" }}>Schedule doorstep KYC</p>
                <p>Get your sim in no time</p>
                <label>Name*</label> <br />
                <br />
                <TextField placeholder="Enter your name" /> <br /> <br />
                <label>MOBILE NUMBER*</label>
                <br /> <br />
                <TextField placeholder="Enter Mobile Number" type="tel" />
              </form>
              <br />

              <label>DO YOU WANT TO PORT THIS NUMBER *</label>
              <Box>
                <RadioGroup>
                  <Box display="flex">
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" name="port" />
                    <FormControlLabel value="No" control={<Radio />} label="No, I want a new connection" name="port" />
                  </Box>
                </RadioGroup>
              </Box>
              <br />
              <label htmlFor=""> PinCode*</label>
              <br />
              <TextField placeholder="Enter pin code" type="tel" />
              <br />
              <label htmlFor="">Location*</label>
              <br />
              <TextField placeholder="Enter area, street name or Pick Via GPS" />
              <br />
              <label htmlFor="">House FlAT NO.(OPTIONAL)</label>
              <br />
              <TextField placeholder="Enter your House/" />
              <br />
              <Button variant="contained">SUBMIT</Button>
            </Box>
          </Box>
          <Box width="70%" margin="30px auto">
            <Typography variant="h4" align="center" gutterBottom>
              Frequently Asked Questions
            </Typography>

            <Accordion variant="outlined">
              <AccordionSummary style={{ backgroundColor: "#f6f6f6", outline: "none" }} expandIcon={<ExpandMore />}>
                <Typography>I have heard that the MNP/Porting process has changed. What is the new process?</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ border: "none" }}>
                <Typography>
                  To generate your unique porting code or UPC, SMS PORT {"<space>"} 99XXXXXXXX and send it to 1900. You
                  will receive the code via SMS from 1901. Since the code is valid only for 4 days (effective from
                  16-Dec-2019)*, make sure you generate the UPC code in presence of our executive. *UPC validity for
                  J&K, NESA will be 30 days
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary style={{ backgroundColor: "#f6f6f6", outline: "none" }} expandIcon={<ExpandMore />}>
                <Typography>Can i switch to Airtel without changing my number?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Of course! You can now switch to Airtel Postpaid Connection without changing your number.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box bgcolor="white">
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid #e8e8eb"
              width="70%"
              margin="0 auto"
            >
              {data.map((d, i) => {
                return (
                  <Box>
                    <List component="ul" disablePadding>
                      <ListItem>
                        <ListItemText primary={<Typography variant="caption">{d.heading}</Typography>} />
                      </ListItem>
                      {d.subHeading.map((s, i) => (
                        <ListItem>
                          <ListItemText primary={s} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <Box>
        <Box display="flex" height="25px" justifyContent="flex-end" bgcolor="#f6f6f6">
          <ul
            style={{ display: "flex", justifyContent: "space-around", listStyle: "none", gap: "10px", margin: "2px" }}
          >
            <li>Xstream</li>
            <li>AIRTEL PAYMENT BANK</li>
            <li>WYNK</li>
          </ul>
          <span style={{ marginTop: "2px", marginLeft: "15px" }}>|</span>
          <ul
            style={{ display: "flex", justifyContent: "space-around", listStyle: "none", gap: "10px", margin: "2px" }}
          >
            <li>CAREERS</li>
            <li>PERSONAL</li>
            <li>BUSINESS</li>
            <li>INVESTORS</li>
          </ul>
        </Box>
        <Box bgcolor="white" width="60%" display="flex" margin="0 auto" alignItems="center">
          <img
            src="https://assets.airtel.in/static-assets/common/img/airtel.webp"
            alt="logo"
            style={{ height: "20px", objectFit: "cover" }}
          />
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              gap: "10px",
            }}
          >
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>PREPAID</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>POSTPAID</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>BROADBAND</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>DTH</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>BANK</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>AIRTEL BLACK</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>AIRTEL FINANCE</Button>
            </li>
            <li>
              <Button endIcon={<ExpandMore>send</ExpandMore>}>HELP</Button>
            </li>
            <li>
              <Box display="flex" flexDirection="column" marginLeft="20px">
                <a href="https://www.airtel.in/airtel-thanks-app?icid=header" class="get-app"></a>
                <img
                  src="https://assets.airtel.in/static-assets/new-home/img/get-app.svg"
                  style={{ height: "30px", objectFit: "contain" }}
                />
                Get App
              </Box>
            </li>
          </ul>
        </Box>
        <Divider />
      </Box>
    );
  }
}

export default withStyles(useStyle)(PrepaidSim);
