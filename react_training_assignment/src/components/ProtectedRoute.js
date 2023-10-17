import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem(props.email)),
    };
  }

  render() {
    const { children } = this.props;
    const { user } = this.state;

    if (user !== null) {
      return children;
    }

    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
