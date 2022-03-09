import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private baseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  private apiKey = "CnATvcAhF3xnBsKt9Pz3Ku9kmjbGFARI";

  constructor(
    private http: HttpClient
  ) { }

  retrieveForecast(cityKey: any): Observable<any> {
  let query = `${cityKey}?apikey=${this.apiKey}&language=en-us&metric=false`;
  return this.http.get(this.baseUrl + query).pipe(
    catchError((err: any) => {
      console.error("forecastService.retrieveForecast(): error retrieving forecast");
      console.error(err);
      return throwError(
        () => new Error("forecastService.retrieveForecast(): error retrieving forecast")
      );
    })
  )
  }
}
