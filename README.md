# deftWeatherForecast

## What I accomplished
  * This is an application that displays three days of weather forecast for a chosen location. The user inputs a location and chooses their city from the results list, at which time a three day weather forecast will populate.
  * The application succesfully utilizes AccuWeather APIs

## How to Access
  * [Follow this Gitpod.io link](https://gitpod.io/#https://github.com/maxmcgregor/deftWeatherForecast.git) to run the Angular application directly from Github.
  * Click "Login with GitHub & launch workspace" to log in to your GitHub account.
  * The Terminal will automatically serve the application. When completed, click Open Browser to access the application.
  ![image](https://user-images.githubusercontent.com/89482750/157788209-649e7328-1033-49f9-b80d-9eaba3df9e94.png)
  

## Tech Overview
  * [Angular](https://angular.io/)
  * [AccuWeather APIs](https://developer.accuweather.com/)

## Roadblocks/Limitations
  * I am using AccuWeather's free tier which only allows for 50 API calls per day, so after 50 searches in a day, the application won't work until tomorrow.
  * The search function only returns direct matches to the information typed.

## Next Steps/Improvements to Solution
  * With more time I would've used another Geolocation API to get a user's location and automatically populate the forecast for their area.
  * I would implement a search that suggests autocomplete options. For example if a user searches Aus, Austin would populate as an autocomplete option. This is one way to prevent searches that return no results.
  * The design/styling isn't what I would like it to be. The responsiveness is less than stellar and the design itself is nearly nonexistent aside for some light styling. For example, I would've liked to add images like sun, clouds, or rain/snow based on the weather but bypassed in favor of minimum functionality.

