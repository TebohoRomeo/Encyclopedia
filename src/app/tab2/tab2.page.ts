import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  // data: any;
  randomNews = [];

  constructor(private router: Router, private newsService:NewsapiService,) {
    newsService.getTopHeadlines()
    .subscribe((results) => {
      this.randomNews.push(...results.articles);
    })
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  loadMoreNews(event) {
    this.newsService
      .getTopHeadlines()
      .subscribe(results => {
        for (const article of results['articles']) {
          this.randomNews.push(...results.articles);
        }
        event.target.complete();
      });
  }

}
