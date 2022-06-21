import React from "react";

class ClassComponent extends React.Component {

    state = {
        paintings: ""
      };




  render(props) {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <p>First painting: {this.state.paintings}</p>
      </article>
    );
  }
}

export default ClassComponent;