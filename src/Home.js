import React, { Component } from "react";

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Christian',
            age: 99
        }
        console.log('I was constructed')
    }

    addOne = () => {
        console.log('button was clicked')
        // this is not the right way
        // this.state.age += 1

        // use setter method
        this.setState({age : this.state.age + 1})
    }

    componentDidMount = () => {
        console.log('I was mounted')
    }
  
    render = () => {
    console.log('I was rendered')
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h2>{this.state.name}</h2>
            <p>{this.state.age}</p>
            <button onClick={this.addOne}>+</button>
            <p>{this.props.test}</p>
        </div>
    )
  }
}
