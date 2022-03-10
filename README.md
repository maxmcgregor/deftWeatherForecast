# deftWeatherForecast
This is an application that displays three days of weather forecast for a chosen location. The user inputs a location and chooses their city from the results list, at which time a three day weather forecast will populate.

## How to Access
  The program can be accessed [by clicking this link] (http://deftweatherapp-maxm.s3-website-us-east-1.amazonaws.com/).

## Tech Overview
  * [Angular] (https://angular.io/)
  * [AccuWeather APIs] (https://developer.accuweather.com/)

## Limitations
  * I am using AccuWeather's free tier which only allows for 50 API calls per day, so after 50 searches in a day, the application won't work until tomorrow.
  * The search function only returns direct matches to the information typed.


## Improvements to Solution, if > 5 hours were allotted to the project
  * With more time I would've used another Geolocation API to get a user's location and automatically populate the forecast for their area.
  * The design/styling isn't what I would like it to be. The responsiveness is less than stellar and the design itself is nearly nonexistent aside for some light styling. For example, I would've liked to add images like sun, clouds, or rain/snow based on the weather but bypassed in favor of minimum functionality.

