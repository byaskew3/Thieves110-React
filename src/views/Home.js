import React, { Component } from "react";

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Christian',
        }
        console.log('I was constructed')
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
            <p>{this.props.age}</p>
            <button onClick={this.props.addOne}>+</button>
            <p>{this.props.test}</p>
        </div>
    )
  }
}
