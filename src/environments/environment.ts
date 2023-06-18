// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsBaseApi: 'https://newsapi.org/v2/',
  newsBaseApiKey: 'a4ee0fd31c114cd89a40b752098b5f0e',
  linkApi: 'http://localhost:3000',

  WEATHER_KEY: 'b52e2471d8ddd418f512156877c08507',
  WEATHER_URL: 'https://api.openweathermap.org/data/2.5',
  
  firebaseConfig :{
    apiKey: "AIzaSyAjf8NfrJPBbSyM09VbIEwN3aRd6MVEn80",
    authDomain: "encyclospace-4e658.firebaseapp.com",
    projectId: "encyclospace-4e658",
    storageBucket: "encyclospace-4e658.appspot.com",
    messagingSenderId: "878909087598",
    appId: "1:878909087598:web:b6b9b8d18c3d1e51262b7f",
    measurementId: "G-JLL5VT8JXR"
  }

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
