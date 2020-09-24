import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  // For Facebook Login Functions

  componentClicked = () => {
    console.log("Login with facebook clicked");
  };

  // When we will get response from facebook

  responseFacebook = (res) => {
    if (res.id) {
      this.setState({
        isLoggedIn: true,
      });
      alert("Successful Login by Facebook");
      window.location = "/home";
    }
  };

  // For Google SDK
  
  responseGoogle = (response) => {
    if (response.profileObj.googleId) {
      this.setState({
        isLoggedIn: true,
      });
      alert("Successful login by google");
      window.location = "/home";
    }
  };

  // To update the states on change in Inputs.

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // When user will click signup button this function will invoke.
  // This will make a call to the regres API to post new user.

  handleSignup = (e) => {
    e.preventDefault();
    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      return alert("Fill all the fields");
    } else {
      Axios.post("https://reqres.in/api/users")
        .then((res) => {
          console.log(res.data);
          alert("User successfully signed up");
          window.location = "/home";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // It will invoke when state changes of component will change or when component will render
  // This render function is serving signup form in the form of jsx.

  render() {
    return (
      <div className="sign-in-form-container">
        <div className="sign-in-form-div">
          <div
            className="sign-in-header-title"
            style={{ paddingBottom: "20px" }}
          >
            SIGN UP
          </div>
          <div className="sign-in-form-header">Create your Account</div>
          <div className="sign-in-header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, beatae.
          </div>
          <div className="google-facebook-signup-container grid-container">
            <div className="grid-item" style={{ width: "48%" }}>
              <GoogleLogin
                clientId="332659994718-16pdi6mk9vs8f2f05le1kmjbdm2a9f11.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div style={{ width: "48%" }} className="grid-item">
              <FacebookLogin
                appId="2775416609361899"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
              />
            </div>
          </div>
          <div className="seperator-container">
            <div className="seperator-div">
              <hr />
              <div>or</div>
              <hr />
            </div>
          </div>

          <form>
            <div className="sign-in-inputs-container">
              <input
                id="first-name"
                placeholder="First Name"
                type="text"
                name="first_name"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="sign-in-inputs-container">
              <input
                id="last-name"
                placeholder="Last Name"
                type="text"
                name="last_name"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="sign-in-inputs-container">
              <input
                id="email"
                placeholder="Email"
                type="text"
                name="email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="sign-in-inputs-container">
              <input
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="policy-agreement-container">
              <span>
                By clicking Sign Up, you agree to our{" "}
                <a className="policy-agreement-links" href="www.google.com">
                  Terms of Use
                </a>{" "}
                and our{" "}
                <a className="policy-agreement-links" href="www.google.com">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="sign-up-button"
              onClick={this.handleSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
