import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={this.props.post.img_url} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">
            {this.props.post.caption}
          </p>
          <small className="card-subtitle text-muted">{this.props.post.author}</small>
        </div>
      </div>
    );
  }
}
