import React from 'react';
import './style.css';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      countries: [],
      country: {},
      selectedIndex: 0,
      currency: {},
      dailingCode: ""
    }
    this.handelChange = this.handelChange.bind(this);

  }


  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())

      .then(countries =>
        this.setState({ countries: countries }))
      .catch(err => console.log("Error:", err));
  }


  handelChange = even => {
    console.log(this.state.countries)

    var newValue = even.nativeEvent.target.value;
    console.log(newValue)
    setTimeout(() => {
      this.setState({ selectedIndex: newValue });
      this.setState({ country: this.state.countries[this.state.selectedIndex] });
      this.setState({ currency: this.state.country.currencies[0] });
      this.setState({ dailingCode: this.state.country.callingCodes[0] });
      console.log(this.state.currency, "hello")
    }, 1000);

  };

  render() {

    return <div className="countainer">
      <div className="drop-down">
        <h3>Country select list with<br /> information</h3>
        <div className="flag-container">
          <img src={this.state.country.flag}></img>
        </div>
        <select
          id="continent"
          onChange={this.handelChange}
          name="country"
          className="flagimg">
          {this.state.countries.map((countrie, index) =>
            <option
              value={index}>
              {countrie.name}
            </option>
          )}
        </select>
        <div className="countryinfo">
          <p><span> Capital: </span>{this.state.country.capital} </p>
          <p><span>Dialing Code: </span>{this.state.dailingCode}</p>
          <p><span>Population: </span>{this.state.country.population}</p>
          <p><span>Currencies: </span>{this.state.currency.code}</p>
          <p><span>Region:</span>{this.state.country.region} </p>
          <p><span>Subregion:</span> {this.state.country.subregion}</p>
        </div>
      </div>
    </div>
  }
}

export default Countries;



