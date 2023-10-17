import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinkOpen: false,
    };
  }

  handleNavLinkToggle = () => {
    this.setState({
      navLinkOpen: !this.state.navLinkOpen,
    });
  };

  renderClasses = () => {
    let classes = "navlinks";
    if (this.state.navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  render() {
    return (
      <nav>
        <div className="logo">
          <i className="fas fa-mountain"></i>
          <h4>Mountains</h4>
        </div>
        <ul className={this.renderClasses()}>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Services</a>
          </li>
          <li className="link">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div onClick={this.handleNavLinkToggle} className="hamburger-toggle">
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </nav>
    );
  }
}
