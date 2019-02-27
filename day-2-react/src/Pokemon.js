import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, description, imageURL } = this.props;
    return (
      <section>
        <p>
          {name}: {description}
        </p>
        <p>
          <img src={imageURL} />
        </p>
      </section>
    );
  }
}

export default Pokemon;
