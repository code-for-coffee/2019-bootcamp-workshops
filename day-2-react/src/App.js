import React, { Component, Fragment } from "react";
import "./App.css";

import Layout from "./Layout";

import { Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    //debugger;\
    console.log("Instantiated App");
    this.state = {
      showPokemon: false
    };
  }

  togglePokemon() {
    this.setState({
      showPokemon: !this.state.showPokemon
    });
    console.log("State for Pokemon is", this.state.showPokemon);
  }

  render() {
    console.log("Rendering App");
    const { appName } = this.props;
    const { showPokemon } = this.state;
    return (
      <Fragment>
        <Layout appName={appName} shouldRender={showPokemon} />
        <Button
          onClick={event => {
            console.log(event);
            this.togglePokemon();
          }}
        >
          Toggle Pokemon for sale
        </Button>
      </Fragment>
    );
  }
}

export default App;
