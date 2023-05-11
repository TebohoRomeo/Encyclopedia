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
  constructor(private newsService: NewsapiService,
    private router: Router) {}

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }

  changeLanguage(){
    this.router.navigate(['/languages'])
    // Pops up model
  }

}
