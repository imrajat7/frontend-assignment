import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from "./components/Home";

// BrowserRouter is used for routing
// With the help of switch I am serving differnet components as per the request.
// Header will not change It will remain same for all.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
