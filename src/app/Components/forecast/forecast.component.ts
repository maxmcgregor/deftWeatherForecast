import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  ForecastData: any;
  ThreeDayForecast: any;
  CityList: any;
  CityKey: any;
  City: any;
  needInstructions: boolean = false;
  outOfCitySearchCalls: boolean = false;
  outOfForecastCalls: boolean = false;

  constructor(
    private cityService: CityService,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
  }

  flipNeedInstructions() {
    this.needInstructions = !this.needInstructions;
  }

  displayForecast(city: any) {
    this.setCityAndForecast(city);
  }

  setCityAndForecast(city: any) {
    this.City = city;
    this.CityKey = city.Key;
    this.getFiveDayForecast(this.CityKey);
  }

  setThreeDayForecast() {
    this.ThreeDayForecast = [];
    for (let i = 0; i < 3; i++) {
      let accuForecast = this.ForecastData.DailyForecasts[i]
      this.ThreeDayForecast[i] = accuForecast;
      //date:
      let tempDate = new Date(accuForecast.Date);
      this.ThreeDayForecast[i].date = tempDate;
    }
  }

  getCityList(city: any) {
    this.cityService.searchCity(city).subscribe({
      next: (cities) => {
        this.CityList = cities;
        this.ThreeDayForecast = null;
        this.outOfCitySearchCalls = false;
      },
      error: (fail) => {
        console.error("ERROR RETRIEVING CITIES" + fail);
        this.outOfCitySearchCalls = true;
      }
    })
  }

  getFiveDayForecast(cityKey: any) {
    this.forecastService.retrieveForecast(cityKey).subscribe({
      next: (forecast) => {
        this.ForecastData = forecast;
        this.setThreeDayForecast();
        this.CityList = null;
        this.outOfForecastCalls = false;
      },
      error: (fail) => {
        console.error("ERROR RETRIEVING FORECAST" + fail);
        this.outOfForecastCalls = true
      }
    })
  }
}
