import React, { Component } from "react";
import SignIn from "../Signin/Index";
import ScrollToTop from "../components/ScrollToTop";

export default class signin extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <SignIn />
      </>
    );
  }
}
