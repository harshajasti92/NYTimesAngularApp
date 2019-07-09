import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-most-popular-articles',
  templateUrl: './most-popular-articles.component.html',
  styleUrls: ['./most-popular-articles.component.css']
})
export class MostPopularArticlesComponent implements OnInit {

  articles: Array<any>;
  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {

    this.newsapi.mostPopularArticles().subscribe(data => {
      this.articles = data['results'];
      console.log(this.articles);
      this.articles.forEach(art => {
        // console.log(typeof(art.published_date))
        art.imageSource = art.media[0]['media-metadata'][2]['url'];
      // console.log(art.imageSource);
    });
    });

  }

}
