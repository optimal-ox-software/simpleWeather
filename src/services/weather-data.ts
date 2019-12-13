// openweathermap.org API key
// 917d83dde0f4e28a2ee0586494c03d61

import { WeatherResponse   } from '../interfaces/weather';
import { SettingsData      } from './settings-data';
import { convertFromKelvin } from '../helpers/utils';

class WeatherDataController {

  public data: WeatherResponse;

  private apiKey: string = "917d83dde0f4e28a2ee0586494c03d61";

  constructor() {
  }

  async load(): Promise<WeatherResponse> {
    if( this.data )
    {
      return this.data;
    }
    else
    {
      return await this.refreshWeather();
    }
  }

  async refreshWeather(): Promise<WeatherResponse> {
    let [location,unit] = await Promise.all([
      SettingsData.getLocation(),
      SettingsData.getTemperatureUnit()
    ]);
    let http_response;
    try
    {
      if( location.useCoords )
      {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&APPID=${this.apiKey}`
        //console.log( url )
        http_response = await fetch(url);
        if( ! http_response.ok )
        {
          throw new Error( 'throw ' + http_response.statusText );
        }
      }
      else
      {        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&APPID=${this.apiKey}`
        //console.log( url )
        http_response = await fetch(url);
        if( ! http_response.ok )
        {
          throw new Error( 'throw ' + http_response.statusText );
        }
      }
    }
    catch( err )
    {
      return Promise.reject(err);
    }
    let weatherData = await http_response.json();
    this.data = this.processData( weatherData, unit );
    return this.data;
  }

  processData( data: WeatherResponse, unit: string ): WeatherResponse {
    data.main.temp     = parseFloat( convertFromKelvin(data.main.temp,unit).toFixed(1) );
    data.main.temp_min = parseFloat( convertFromKelvin(data.main.temp_min,unit).toFixed(1) );
    data.main.temp_max = parseFloat( convertFromKelvin(data.main.temp_max,unit).toFixed(1) );
    return data;
  }

  async getCurrentWeather(): Promise<WeatherResponse> {
    const data = await this.load();
    return data;
  }

}

export const WeatherData = new WeatherDataController();
