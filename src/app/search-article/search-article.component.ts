import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {

  articles: Array<any>;
  searchOption: string = '';

  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {

    // this.communityComments();

  }

  communityComments(){
    // console.log(this.searchOption);
    this.newsapi.communityComments().subscribe(data => {
      console.log(data);
    });
  }

  searchArticle(){
    console.log(this.searchOption);
    this.newsapi.searchArticles(this.searchOption).subscribe(data => {
      // console.log(data);
      this.articles = data['response']['docs'];
      this.articles.forEach(art => {
        if(art.multimedia != ""){
          art.imageSource = "https://static01.nyt.com/"+art.multimedia[1]['url'];
        }
        else{
          // console.log("here");
          art.imageSource = "";
        }
      });
      console.log(this.articles);
      });
  }

}
