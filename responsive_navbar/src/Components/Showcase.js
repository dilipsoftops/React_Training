import React, { Component } from "react";

export default class Showcase extends Component {
  render() {
    return (
      <div className="showcase">
        <h2>Discover an Adventure</h2>
        <h1>Travel the world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis nobis aliquid omnis odio ipsa
          itaque rerum id repudiandae, consectetur totam quidem? Commodi, nulla! Quia aliquid dolor debitis doloremque!
          Quisquam!
        </p>
        <div className="showcase_buttons">
          <button className="showcase_btn-services">SERVICES</button>
          <button className="showcase_btn-about">ABOUT US</button>
        </div>
      </div>
    );
  }
}
