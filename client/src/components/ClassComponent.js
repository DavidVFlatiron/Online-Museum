import React from "react";

class ClassComponent extends React.Component {

    state = {
        paintings: ""
      };

    componentDidMount() {
        this.apiCall();
   }

    apiCall() {
    const { paintings } = this.state;
    fetch("http://localhost:9292/paintings/1")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ paintings: data.name})
        });
  }

    


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