import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Assignment1 from "./components/Assignment1.js";
import Assignment2 from "./components/Assignment2.js";
import Assignment3 from "./components/Assignment3.js";
import Assignment4 from "./components/Assignment4.js";
import Assignment5 from "./components/Assignment5.js";
import Assignment6 from "./components/Assignment6.js";
import Assignment7 from "./components/Assignment7.js";
import Assignment8 from "./components/Assignment8.js";
import Assignment9 from "./components/Assignment9.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Navbar from "./components/Navbar.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLogged: false,
    };
  }

  handleChange = (email, isLoggedIn) => {
    this.setState({
      email: email,
      isLogged: isLoggedIn,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar
          isLogged={this.state.isLogged}
          handleChange={this.handleChange}
        />
        <Routes>
          <Route
            path="/"
            element={<Login handleChange={this.handleChange} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/Assignment1"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment2"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment3"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment4"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment4 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment5"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment5 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment6"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment6 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment7"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment7 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment8"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment8 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Assignment9"
            element={
              <ProtectedRoute email={this.state.email}>
                <Assignment9 />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={100}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    );
  }
}
