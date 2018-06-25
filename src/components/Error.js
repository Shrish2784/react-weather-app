import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div id="result">
        <span id="error">{this.props.error}</span>
      </div>
    );
  }
}

export default Error;
