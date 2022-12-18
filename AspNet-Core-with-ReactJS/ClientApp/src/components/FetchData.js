import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>so gio</th>
            <th>so tien cua 1 ngay</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
              <tr key={forecast.WeatherForecastId}>
                  <td>{forecast.WeatherForecastId}</td>
              <td>{forecast.sogio}</td>
              <td>{forecast.sotiencua1ngay}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
   

      return (
           <section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Let's work together...</h2>
      <p>How do you take your coffee?</p>
    </div>
    <div class="contact-links">
      <a href="https://www.facebook.com/ti200x" target="_blank" class="btn contact-details"><i class="fab fa-facebook-square"></i> Facebook</a>
      <a id="profile-link" href="https://github.com/freecodecamp" target="_blank" class="btn contact-details"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://twitter.com/freecodecamp" target="_blank" class="btn contact-details"><i class="fab fa-twitter"></i> Twitter</a>
      <a href="mailto:example@example.com" class="btn contact-details"><i class="fas fa-at"></i> Send a mail</a>
      <a href="tel:555-555-5555" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Call me</a>
    </div>
  </section>
    );
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);
        return (
            <div>
                <h1 id="tabelLabel" >Employee salary</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
         }

  async populateWeatherData() {
    const response = await fetch('weatherforecast/getAll');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
