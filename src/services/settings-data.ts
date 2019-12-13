// services/settings-data.ts

import { get, set } from "./storage";
import { Location } from "../interfaces/location";

const TEMPERATURE_UNIT_KEY = "weatherTemperatureUnit";
const LOCATION_KEY = "weatherUserLocation";

export class SettingsController {

  private defaultLocation: Location = {
    useCoords: true,
    lat: null,
    lng: null,
    name: "Adelaide"
  };

  async getTemperatureUnit(): Promise<string> {
    let t = (await get(TEMPERATURE_UNIT_KEY)) || "celsius";
    console.log( '-- getTemp ' + t );
    return t;
  }

  async setTemperatureUnit( unit: string ): Promise<void> {
    console.log( '-- setTemp ' + unit );
    await set(TEMPERATURE_UNIT_KEY, unit);
  }

  async getLocation(): Promise<Location> {
    return (await get(LOCATION_KEY)) || this.defaultLocation;
  }

  async setLocationName( name: string ): Promise<void> {
    let loc = (await this.getLocation()) || this.defaultLocation;
    loc.name = name;
    return set(LOCATION_KEY, loc);
  }

  async setCoords( lat: number, lng: number ): Promise<void> {
    let loc = (await this.getLocation()) || this.defaultLocation;
    loc.lat = lat;
    loc.lng = lng;
    return set(LOCATION_KEY, loc);
  }

  async setUseCoords( flag: boolean ): Promise<void> {
    let loc = (await this.getLocation()) || this.defaultLocation;
    loc.useCoords = flag;
    return set(LOCATION_KEY, loc);
  }

}

export const SettingsData = new SettingsController();
