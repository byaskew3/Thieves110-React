import React, { Component } from "react";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      pokeName: '',
      pokeAbilities: []
    };
  }

  getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    const data =await response.json()
    console.log(data)

    // setting the state
    this.setState({
      pokeName: data.name
    })
  }

  componentDidMount = () => {
    this.getPokemon()
  }

  render() {
    return (
    <div>
      <h1>Pokemon Page</h1>
      <h2>Pokemon Name: {this.state.pokeName}</h2>
    </div>
    );
  }
}
