import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  articles: Array<any>;
  // const selectCriteria = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"];
  selectedChoice: any = "World";
  selectCriteria = {arts: "white", automobiles: "white", books: "white", business: "white", fashion: "white", food: "white", health: "white",home: "white",insider: "white",magazine: "white",movies: "white", national: "white",nyregion: "white",obituaries: "white",opinion: "white",politics: "white",realestate: "white",science: "white", sports: "white", sundayreview: "white", technology: "white", theater: "white", tmagazine: "white", travel: "white", upshot: "white", world: "red"};

  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    this.selectTopStory("world");
  }

  select(choice){
    // for (let cho of this.selectCriteria) {
    //     this.selectCriteria[cho] = "white";
    // }
    for (let c in this.selectCriteria){
      this.selectCriteria[c]="white";
    }
    // this.selectCriteria
    this.selectCriteria[choice] = "#FF4432";
    // console.log(this.selectCriteria);
    // console.log(choice);
    // this.selectedChoice = choice;
    this.selectTopStory(choice);
  }

  selectTopStory(choice){
    console.log(choice);
    this.newsapi.topStories(choice).subscribe(data => {
      this.articles = data['results'];
      console.log(this.articles);
      this.articles.forEach(art => {
        // console.log(typeof(art.published_date))
        // console.log(art.multimedia);
        if(art.multimedia != ""){
          art.imageSource = art.multimedia[4]['url'];
        }
        else{
          // console.log("here");
          art.imageSource = "assets/image-not-found.png";
        }
        // art.imageSource = art.media[0]['media-metadata'][2]['url'];
      // console.log(art.imageSource);
    });
    });
  }

}
