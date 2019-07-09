import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'MNfwU8WSeEXFHDs99NsFWjQkAOn9MAmw';

  constructor(private http:HttpClient) { }

  mostPopularArticles(): Observable<Object> {
    var url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key='+this.api_key;
    return this.http.get<Object>(url);
  }

  topStories(choice): Observable<Object> {
    // console.log(choice);
    var topStoryCriteria = choice;
    var url = 'https://api.nytimes.com/svc/topstories/v2/'+ topStoryCriteria +'.json?api-key='+this.api_key;
    return this.http.get<Object>(url);
  }

  searchArticles(searchOption): Observable<Object> {
    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+searchOption+'&api-key='+this.api_key;
    console.log(url);
    return this.http.get<Object>(url);
  }

  communityComments(): Observable<Object> {
    // var url = 'https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key='+this.api_key+'&offset=0&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F06%2F21%2Fscience%2Fgiant-squid-cephalopod-video.html'
    // var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+searchOption+'&api-key='+this.api_key;
    // var url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key="+this.api_key;
    // var url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json?latitude=40.7128%C2%B0%20N&longitude=74.0060%C2%B0%20W&facets=1&api-key="+this.api_key;
    var url = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key="+this.api_key;
    console.log(url);
    return this.http.get<Object>(url);
  }

  movieReviews(): Observable<Object> {
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key="+this.api_key;
    console.log(url);
    return this.http.get<Object>(url);
  }

  specificMovieReview(movieTitle): Observable<Object> {
    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="+movieTitle+"&api-key="+this.api_key;
    // var url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key="+this.api_key;
    console.log(url);
    return this.http.get<Object>(url);
  }

  archives(month,year): Observable<Object> {
    var url = "https://api.nytimes.com/svc/archive/v1/"+year+"/"+month+".json?api-key="+this.api_key;
    return this.http.get<Object>(url);
  }

}
