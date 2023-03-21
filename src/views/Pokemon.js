import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokeName: '',
      pokeImage: '',
      pokeType: ''
    };
  }

  getPokemon = async (name='pikachu') => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data =await response.json()
    console.log(data)

    // setting the state
    this.setState({
      pokeName: data.name,
      pokeImage: data.sprites.versions['generation-v']['black-white'].animated.front_default,
      pokeType: data.types[0].type.name
    })
  }

  componentDidMount = () => {
    this.getPokemon()
  }

  searchPoke = (event) => {
    event.preventDefault()
    const name = event.target.poke.value
    this.getPokemon(name)
  }

  render() {
    return (
    <div>
      <h1>Search Your Pokemon!</h1>
      <form onSubmit={this.searchPoke}>
        <input name="poke" placeholder="Search for a Pokemon"/>
        <button>Search</button>
      </form>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={this.state.pokeImage} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{this.state.pokeName}</h5>
          <p className="card-text">
            {this.state.pokeType}
          </p>
        </div>
      </div>
    </div>
    );
  }
}
