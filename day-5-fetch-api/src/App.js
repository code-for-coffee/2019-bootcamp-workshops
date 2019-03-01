import React, { Component } from "react";
import "./App.css";

import Spinner from "./components/Spinner";
import Pokemon from "./components/Pokemon";

// we only import jQuery for now...
// we will replace with fetch()
import $ from "jquery";

console.log("Global This", this);

/**
 * App Container for React application.
 * It will render a spinner until data is fetched.
 * We store the state of the application in
 * component state (isLoading: true)
 */
class App extends Component {
  // define initial state without constructor
  state = {
    error: false,
    isLoading: true,
    pokemon: "pikachu",
    // always declare items you will fetch so the variable
    // exists in state no matter if data is there or not
    // in this case, "data"
    data: null
  };

  /**
   * We will refactor this method to remove $.ajax with fetch()
   * Try Marvel API: https://developer.marvel.com/
   * Create SuperHero component instead of Pokemon
   */
  fetchPokemon() {
    console.log("Method This", this);
    const { pokemon } = this.state;
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    // $.ajax({
    //   url: URL
    // }).done(json => {
    //   console.log("API Data", json);
    //   this.setState({
    //     isLoading: false,
    //     data: json
    //   });
    // });
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("Lambda This", this);
        console.log(json);
        this.setState({
          data: json,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  componentDidMount() {
    console.log("didMount");

    setTimeout(() => {
      this.fetchPokemon();
    }, 5000);
  }

  render() {
    console.log("render");
    const { isLoading, data, error } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Pokemon Shop</h1>
        </header>

        <section className="container">
          <div className="box">
            Welcome to the Pokemon Store. Here you can find great Pokemon! Thank
            you for shopping at your local Pokemart!
          </div>
          <div className="box">
            {isLoading ? <Spinner /> : <Pokemon data={data} />}
          </div>
        </section>
        <section className="container">
          <div className="box">Checking for errors...</div>
          <div className="box">{error ? "Error state" : "no problem "}</div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
