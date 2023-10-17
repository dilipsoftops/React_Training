import React, { Component } from "react";
import Sidebar from "../components/Sidebar/Index";
import Navbar from "../components/Navbar/Index";
import HeroSection from "../components/HeroSection/Index";
import InfoSection from "../components/InfoSection/Index";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services/Index";
import Footer from "../components/Footer/Index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer />
      </>
    );
  }
}
