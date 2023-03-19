import React, { Component } from "react";
import { greeting } from "../../portfolio";

class FeelingProud extends Component {
  render() {
    return (
      <img
        alt="profile"
        src={require(`../../assests/images/${greeting.picture}`)}
      ></img>
    );
  }
}

export default FeelingProud;
