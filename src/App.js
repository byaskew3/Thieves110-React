import './App.css';

import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';
import Pokemon from './Pokemon';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      test: 'phone'
    }
  }
  render() {
    return (
      <div>
        <Nav/>
        <Home test = {this.state.test} />
        <Pokemon/>
      </div>
    )
  }
}