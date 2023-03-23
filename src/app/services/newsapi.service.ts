import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { decode } from 'querystring';


const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
const apiurl = environment.linkApi;

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  currentArticle: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }

  getApiUrl(url) {    
    return this.http.get(`${apiurl}/${url}/?page=15`, this.httpOptions)
    .pipe(
      take(1),
      map(res => {
        const getBackResponse = res;
        console.log(getBackResponse, 'See this response');
        return getBackResponse;
      }),
      // catchError(e => {
      //   const myErrors = e.error.message
      //   this.errors = myErrors
      //   throw new Error(JSON.stringify(e))
      // })
    )
  }

    // getRickChar(url) {
  //   console.log(this.http.get(`${API_URL}/${url}`), 'The link');
    
  //   return this.http.get(`${API_URL}/${url}/?page=1`, this.httpOptions)
  // }

}
