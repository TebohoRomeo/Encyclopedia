import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  data: any;
  page = 1;
 constructor(private router: Router, private newsService:NewsapiService,) {
   this.newsService
     .getApiUrl(`news`).subscribe(data => {
      //  console.log(data, 'hosh');
       this.data = data;
     });
 }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

  loadMoreNews(event) {
    this.page++;
    console.log(event);
    this.newsService
      .getApiUrl(`news`)
      .subscribe(data => {
        console.log(data, 'must be dataaaa');
        // this.data = data;
        // console.log(data['articles'], 'must be data');
        
        for (const article of data['artitle']) {
          console.log(article, 'them articles');
          
          this.data.artitle.push(article);
        }
        event.target.complete();
        console.log(this.data);
      });
  }

}
