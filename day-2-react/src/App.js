import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import Pokemon from "./Pokemon";

class App extends Component {
  constructor(props) {
    super(props);
    //debugger;\
    console.log("Instantiated App");
  }
  render() {
    console.log("Rendering App");
    const { appName } = this.props;
    return (
      <Fragment>
        {appName}
        <Pokemon
          name="Slowbro"
          description="Really, really slow"
          imageURL="https://tse4.mm.bing.net/th?id=OIP.ioWmmNTyFBaNJ1v5T87iIQHaIn&pid=Api"
        />
      </Fragment>
    );
  }
}

export default App;
