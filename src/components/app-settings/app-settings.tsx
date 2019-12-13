import { Component, State, h } from '@stencil/core';
import { SettingsData        } from '../../services/settings-data';

@Component({
  tag:      "app-settings",
  styleUrl: "app-settings.css"
})
export class AppSettings {

  @State() useCurrentLocation: boolean = true;
  @State() presetLocation: string = "Adelaide";
  @State() unit: string = "celsius";

  async componentWillLoad() {

    let [location, unit] = await Promise.all([
      SettingsData.getLocation(),
      SettingsData.getTemperatureUnit()
    ]);

    this.useCurrentLocation = location.useCoords;
    this.presetLocation = location.name;
    this.unit = unit;
  }

  async handleToggleLocation( useLocation ) {
    this.useCurrentLocation = useLocation;
    await SettingsData.setUseCoords( useLocation );
  }

  async handleLocationChange( loc ) {
    this.presetLocation = loc;
    await SettingsData.setLocationName( loc );
  }

  async handleUnitChange( u ) {
    this.unit = u;
    await SettingsData.setTemperatureUnit( u );
    console.log( '+++++', u );
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title> Settings
          </ion-title> 
        </ion-toolbar>
      </ion-header>,
       
      <ion-content class="ion-padding">
        <small>
          Choose to display weather either from your current location 
          or a preset location of your choosing.
        </small>
        <ion-radio-group>
          <ion-item>
            <ion-label>Use current location</ion-label>
            <ion-radio 
              slot="start" 
              value="current" 
              checked={this.useCurrentLocation} 
              onIonSelect={ () => this.handleToggleLocation(true) }
            />
          </ion-item>
          <ion-item>
            <ion-label>
            </ion-label>Use preset location<ion-radio 
              slot="start" 
              value="preset" 
              checked={!this.useCurrentLocation} 
              onIonSelect={ () => this.handleToggleLocation(false) }
            />
          </ion-item>
        </ion-radio-group>

        <small>
          When using a preset location, the location listed below will be used.
        </small>
        <ion-item>
          <ion-input 
            type="text" 
            value={this.presetLocation} 
            onIonInput={ (ev: any) => { this.handleLocationChange(ev.target.value) } }
          />
        </ion-item>

        <small>
          Select the unit of temperature to display the weather:
        </small>
        <ion-radio-group>
          <ion-item>
            <ion-label>
              Celsius
            </ion-label>
            <ion-radio 
              slot="start" 
              checked={this.unit == "celsius"} 
              onIonSelect={ () => this.handleUnitChange("celsius") }
            />
          </ion-item>
          <ion-item>
            <ion-label>
              Fahrenheit
            </ion-label>
            <ion-radio 
              slot="start" 
              checked={this.unit == "fahrenheit"} 
              onIonSelect={ () => this.handleUnitChange("fahrenheit") }
            />
          </ion-item>
          <ion-item>
            <ion-label>
              Kelvin
            </ion-label>
            <ion-radio 
              slot="start" 
              checked={this.unit == "kelvin"} 
              onIonSelect={ () => this.handleUnitChange("kelvin") }
            />
          </ion-item>
        </ion-radio-group>
        <small hidden={this.unit != "kelvin"}>
          Kelvin? Seriously?
        </small>
      </ion-content>
    ];
  }

}

