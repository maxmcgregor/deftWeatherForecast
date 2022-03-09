import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
  private apiKey = "CnATvcAhF3xnBsKt9Pz3Ku9kmjbGFARI";

  constructor(
    private http: HttpClient
  ) { }

  searchCity(city: any): Observable<any> {
    let query = `?apikey=${this.apiKey}&q=${city.cityToSearch}&language=en-us`;
    return this.http.get(this.baseUrl + query).pipe(
      catchError((err: any) => {
        console.error("cityService.searchCity(): error retrieving cities");
        console.error(err);
        return throwError(
          () => new Error("cityService.searchCity(): error retrieving cities")
        );
      })
    )
  }

}
