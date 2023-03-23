/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { IonContent  } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { NewsapiService } from '../services/newsapi.service'
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
  month = this.today.toLocaleString('default', { month: 'long' });
  day = this.daysList[this.today.getDay()]

  data: any;
  page = 1;
  constructor(private newsService:NewsapiService, private router: Router) {
    console.log(this.page, 'This page');
    
    this.newsService
      .getData(
        `top-headlines?country=za&category=business&page=${
          this.page
        }`
      )
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  ngOnInit() {
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
      .getData(
        `top-headlines?country=us&category=business&page=${
          this.page
        }`
      )
      .subscribe(data => {
        // console.log(data);
        // this.data = data;
        for (const article of data['articles']) {
          this.data.articles.push(article);
        }
        event.target.complete();
        console.log(this.data);
      });
  }

}
