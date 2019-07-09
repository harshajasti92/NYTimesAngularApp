import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  articles: Array<any> = [];
  archiveCount: number = 0;
  month: number = 11;
  year: number = 2017;
  errorMessage: String = "";
  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    this.archives();
  }

  archives(){
    this.articles = [];
    this.archiveCount = 0;
    this.errorMessage = "";
    if(this.month < 13 && this.year > 1851 && this.year < 2020){
      this.month = parseInt(this.month.toString(),10);
      this.newsapi.archives(this.month,this.year).subscribe(data => {
        console.log(data);
        let count = 0;
        data['response']['docs'].reverse();
        data['response']['docs'].forEach(artLimit =>{
          if(count<20){
            this.articles.push(artLimit);
            count = count + 1;
            if(artLimit.multimedia != ""){
              artLimit.imageSource = "https://static01.nyt.com/"+artLimit.multimedia[0]['url'];
            }
            else{
              artLimit.imageSource = "";
            }
          }
        })
        this.archiveCount = data['response'].meta.hits;
        console.log(this.articles);
      });
    }
    else{
      this.errorMessage = "Please choose between years 1851 - 2019 and between months 1- 12"
    }

  }

}
