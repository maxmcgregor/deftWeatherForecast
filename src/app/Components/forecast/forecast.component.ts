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

  constructor(
    private cityService: CityService,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
  }

  testShit() {
    console.log("testShit this.CityList");
    console.log(this.CityList);
    console.log("testShit this.ForecastData");
    console.log(this.ForecastData);
    console.log("testShit this.ForecastData.DailyForecasts");
    console.log(this.ForecastData.DailyForecasts);
    console.log("testShit this.ForecastData.DailyForecasts[0]");
    console.log(this.ForecastData.DailyForecasts[0]);
    console.log("City: ");
    console.log(this.City);
    console.log("this.ThreeDayForecast: ");
    console.log(this.ThreeDayForecast);
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
      },
      error: (fail) => {
        console.error("ERROR RETRIEVING CITIES" + fail);
        //put trigger here to display error to user that city search didn't work
      }
    })
  }

  getFiveDayForecast(cityKey: any) {
    this.forecastService.retrieveForecast(cityKey).subscribe({
      next: (forecast) => {
        this.ForecastData = forecast;
        this.setThreeDayForecast();
        this.CityList = null;
      },
      error: (fail) => {
        console.error("ERROR RETRIEVING FORECAST" + fail);
        //put trigger here to display error to user that forecast retrieval didn't work
      }
    })
  }
}
