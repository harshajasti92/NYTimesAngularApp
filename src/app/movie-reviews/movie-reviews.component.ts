import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {

  articles: Array<any>;
  movieTitle: string = '';

  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    this.movieReviews();
  }

  movieReviews(){
    this.newsapi.movieReviews().subscribe(data => {
      this.articles = data['results'];
      this.articles.forEach(art => {
        if(art.multimedia != ""){
          art.imageSource = art.multimedia.src;
        }
        else{
          art.imageSource = "";
        }
      });
      console.log(this.articles);
    });
  }

  specificMovieReview(){
    this.newsapi.specificMovieReview(this.movieTitle).subscribe(data => {
      this.articles = data['results'];
      console.log(this.articles);
      this.articles.forEach(art => {
        console.log(art.multimedia);
        console.log(typeof(art.multimedia));
        if(art.multimedia != null){
          art.imageSource = art.multimedia.src;
        }
        else{
          art.imageSource = "";
        }
      });
      console.log(this.articles);
    });
  }

}
