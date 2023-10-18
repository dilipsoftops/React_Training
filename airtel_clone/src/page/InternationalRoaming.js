import {
  Divider,
  InputLabel,
  MenuItem,
  Select,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";

const useStyle = createStyles((theme) => ({
  section: {
    width: "70%",
    margin: "auto",
  },
}));

class InternationalRoaming extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.section}
          style={{ marginTop: "15px", padding: "15px" }}
        >
          <img
            src="https://assets.airtel.in/static-assets/online-recharge-ui/assets/images/logo.png"
            alt=""
          />
        </div>
        <Divider />
        <div
          className={classes.section}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              padding: "5px",
              fontSize: "32px",
            }}
          >
            <h2>
              New International packs <br /> at 133/day
            </h2>
            <span>with a lot of benefits</span>
          </div>
          <img
            src="https://assets.airtel.in/static-assets/selfcare/images/IR_v5.jpg"
            alt=""
          />
        </div>
        <Divider />
        <div className={classes.section}>
          <p style={{ fontSize: "32px", marginBottom: "5px" }}>
            Airtel International Roaming Plans
          </p>
          <p style={{ fontSize: "24px", marginTop: "0" }}>
            Best IR Recharge Packs
          </p>

          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginRight: "30px", fontSize: "64px" }}>1</h1>
              <p>
                Select the <br /> country you are <br /> visiting
              </p>
            </div>

            <div>
              <InputLabel>COUNTRY</InputLabel>
              <Select>
                <MenuItem>USA</MenuItem>
                <MenuItem>Indonesia</MenuItem>
                <MenuItem>Sri Lanks</MenuItem>
                <MenuItem>United Kingdom</MenuItem>
                <MenuItem>UAE</MenuItem>
                <MenuItem>Singapore</MenuItem>
              </Select>
            </div>
          </div>

          <Divider />

          <div>
            <h1 style={{ fontSize: "64px" }}>2</h1>
            <p>
              Enter your 10 <br /> digit mobile <br /> number
            </p>

            <InputLabel>MOBILE NUMBER</InputLabel>
            <span>
              +91 <input placeholder="Enter Mobile Number" />
            </span>
          </div>
          <Divider />
          <div>
            <h1 style={{ fontSize: "64px" }}>3</h1>
            <p>
              Choose your <br /> International <br /> roaming pack
            </p>

            <p>
              Please enter required details to fetch suitable packs for you.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#333333",
            padding: "15px",
          }}
        >
          <div
            className={classes.section}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#9f9f9f" }}>
              2023 Airtel India.All Rights Reserved.
            </p>
            <div>
              <img
                src="https://assets.airtel.in/static-assets/online-recharge-ui/assets/images/bsi-assurance-iso-22301_opt.png"
                alt=""
              />
              <img
                src="https://assets.airtel.in/static-assets/online-recharge-ui/assets/images/norton-certificate_opt.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyle)(InternationalRoaming);
