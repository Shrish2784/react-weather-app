import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div id="result">
        <span id="city">{this.props.city}: </span>
        <span id="temp">
          <small>{this.props.temp}</small>
        </span>
        <br />
        <span id="details">{this.props.details}</span>
      </div>
    );
  }
}

export default Result;
