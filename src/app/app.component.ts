import { Component } from '@angular/core';
// import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Array<any>;

  constructor(){
    console.log('app component constructor is called');
  }

  ngOnInit(){
  }

}
