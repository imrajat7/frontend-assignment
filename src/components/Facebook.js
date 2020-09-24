import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
    };
  }

  componentClicked = () => {
    console.log("Login with facebook clicked");
  };

  responseFacebook = (res) => {
    this.setState({
      isLoggedIn: true,
      name: res.name,
      userID: res.userID,
    });
    return <Redirect to="/home" />;
  };

  render() {
    let fbContent;
    fbContent = (
      <FacebookLogin
        appId="2775416609361899"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
      />
    );

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
