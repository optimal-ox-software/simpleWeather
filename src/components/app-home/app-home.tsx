import { Component, State, h } from '@stencil/core';
import { Plugins }      from '@capacitor/core';
import { SettingsData } from '../../services/settings-data';
import { WeatherData } from '../../services/weather-data';
import { WeatherResponse } from '../../interfaces/weather';

const { Geolocation } = Plugins;

@Component({
  tag:      'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() weatherIcon: string = "thermometer";

  @State() weather: WeatherResponse = {
    base: "",
    clouds: null,
    cod: null,
    coord: null,
    dt: null,
    id : null,
    main: {
      humidity: null,
      pressure: null,
      temp: null,
      temp_min: null,
      temp_max: null
    },
    name: "Loading...",
    sys: null,
    visibility: null,
    weather: [
      {
        id: null,
        main: null,
        description: null,
        icon: null,
      }
    ],
    wind: null
  }

  async componentDidLoad() {
    let coords = await Geolocation.getCurrentPosition();
    await SettingsData.setCoords( coords.coords.latitude,
                                  coords.coords.longitude );
    try
    {
      this.weather = await WeatherData.getCurrentWeather();
    }
    catch( err )
    {
      console.log( err );
    }

    const router = document.querySelector("ion-router");
    router.addEventListener("ionRouteDidChange", () => {this.refresherHandler();} );

    this.setWeatherIcon();
  }

  async refresherHandler( event? ) {
    try
    {
      this.weather = await WeatherData.refreshWeather();
    }
    catch( err )
    {
      console.log( err );
    }

    this.setWeatherIcon();

    if( event )
    {
      event.target.complete();
    }
  }

  setWeatherIcon() {
    let i = "thermometer";
    let d = this.weather.weather[0].description;
    if( d ) {
      if( d.includes("lightning") ) i = "thunderstorm";
      if( d.includes("thunder")   ) i = "thunderstorm";
      if( d.includes("wind")      ) i = "flag";
      if( d.includes("shower")    ) i = "rainy";
      if( d.includes("rain")      ) i = "rainy";
      if( d.includes("snow")      ) i = "snow";
      if( d.includes("frost")     ) i = "snow";
      if( d.includes("cloud")     ) i = "cloudy";
      if( d.includes("sun")       ) i = "sunny";
      if( d.includes("clear ")    ) i = "sunny";
    }
    this.weatherIcon = i;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>
            Weather
          </ion-title>
          <ion-buttons slot="end">
            <ion-button href="/settings" routerDirection="forward">
              <ion-icon name="settings" slot="icon-only" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      ,
      <ion-content class="ion-padding">
        <ion-refresher 
          slot="fixed" 
          onIonRefresh={ event => this.refresherHandler(event) }
        >
          <ion-refresher-content />
        </ion-refresher>
        <div class="weather-display">
          <ion-icon name={this.weatherIcon} />
          <h1>{this.weather.main.temp}&#176;</h1>
          <p>{this.weather.weather[0].description}</p>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>
                {this.weather.name}
              </ion-card-subtitle>
              <ion-card-title>
                Overview
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-grid>
                <ion-row>
                  <ion-col size="6"> Min </ion-col>
                  <ion-col size="6"> {this.weather.main.temp_min}&#176; </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col size="6"> Max </ion-col>
                  <ion-col size="6"> {this.weather.main.temp_max}&#176; </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    ];
  }

}
