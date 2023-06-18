import { environment } from './../../environments/environment';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { IonContent  } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { NewsapiService } from '../services/newsapi.service'


const API_URL = environment.WEATHER_URL;
const API_KEY = environment.WEATHER_KEY;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  // Slides
  opts = {
    slidesPerView: 2.4,
    slieOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  }
  // Dates
  today = new Date();
  daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month = this.today.toLocaleString('default', { month: 'short' });
  day = this.daysList[this.today.getDay()]

  // Variables
  data: any;
  selectCategory = 'sport';
  topHeadlines = []
  weatherOps: any;
  weatherIcon: any;
  weatherTemp: any;
  constructor(private newsService:NewsapiService, private router: Router, 
    private http: HttpClient) {

    // this.loadData();

      newsService.getTopHeadlines()
      .subscribe((results) => {
        this.topHeadlines.push(...results.articles);
      })

      newsService.getArticleByCategory(this.selectCategory)
      .subscribe((results) => {
      })
  }

  loadData() {
    this.http.get(`${API_URL}/weather?q=${"johannesburg"}&appid=${API_KEY}`)
    .subscribe(results => {
      console.log(results,' my results');
      this.weatherOps = results['weather'][0];

      // const weathertemp = ;
      const weathercon = `https://openweathermap.org/img/wn/${this.weatherOps.icon}@4x.png`
      
      this.weatherIcon = weathercon;
    })
  }

  ngOnInit() {
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  loadMoreNews(event) {
    console.log(event);
    this.newsService
      .getTopHeadlines()
      .subscribe(results => {
        console.log(results, 'in loadmore');
        for (const article of results['articles']) {
          console.log(...results.articles, 'Search here');
          
          this.topHeadlines.push(...results.articles);
        }
        event.target.complete();
      });
  }

}
