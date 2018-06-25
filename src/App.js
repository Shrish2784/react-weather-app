import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Error from "./components/Error";

class App extends React.Component {
  state = {
    cod: undefined,
    temperature: undefined,
    city: undefined,
    details: undefined,
    status: undefined
  };

  addCity = e => {
    e.preventDefault();
    const cityName = e.target.elements.City.value;
    const apiKey = "4c82fae2ad4ecd362a50055af2df5a54";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data["cod"] === 200) {
          this.setState({
            cod: data["cod"],
            city: data["name"],
            temperature: data["main"]["temp"],
            details: data["weather"][0]["description"],
            status: data["message"]
          });
        } else {
          this.setState({
            cod: 404,
            city: undefined,
            temperature: undefined,
            details: undefined,
            status: data["message"]
          });
        }
      })
      .catch(err => {
        console.log("OOPS!");
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search addCity={this.addCity} />
          {this.state["cod"] === 200 && (
            <Result
              city={this.state["city"]}
              temp={this.state["temperature"]}
              details={this.state["details"]}
            />
          )}
          {this.state["cod"] !== 200 && <Error error={this.state["status"]} />}
        </div>
      </div>
    );
  }
}

export default App;
