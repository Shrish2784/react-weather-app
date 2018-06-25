import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div id="search">
        <form onSubmit={this.props.addCity}>
          <input type="text" name="City" id="cityNameInput" />
          <button id="submitButton">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
