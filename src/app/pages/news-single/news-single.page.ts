import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article;
  topHeadlines = [];
  page = 1;
  constructor(private newsService: NewsapiService,
    private router: Router) {}

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
    this.loadMoreNews(event);
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
      .getTopHeadlines()
      .subscribe(results => {
        console.log(results, 'in loadmore');
        // this.data = data;
        for (const article of results['articles']) {
          console.log(...results.articles, 'Search here');
          
          this.topHeadlines.push(...results.articles);
        }
        event.target.complete();
        // console.log(this.data);
      });
  }

  changeLanguage(){
    this.router.navigate(['/languages'])
    // Pops up model
  }

}
