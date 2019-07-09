import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  articleAnalysis: Array<any> = [];
  articles: Array<any> = [];
  archiveCount: number = 0;
  month: number = 11;
  year: number = 2017;
  errorMessage: String = "";
  articleWordCount = {'<500':0, '500-1000':0, '>1000':0};
  articlePageCount = {'<5':0, '5-10':0, '>10':0};
  articleCriteria = {}
  tempArray=[];
  tempArray2=[];
  showAnalysisButton = 0;

  public pieChartPageCountOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Article Page Count',
      display: true,
      fontSize: 16,
      fontColor: '#FF4432',
    },
    legend: {
      position: 'top',
      labels:{
        fontColor: 'white',
      }
    },
  };
  public pieChartWordCountOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Article Word Count',
      display: true,
      fontSize: 16,
      fontColor: '#FF4432',
    },
    legend: {
      position: 'top',
      labels:{
        fontColor: 'white',
      }
    },
  };
  public pieChartPageCountLabels: Label[] = ['<5', '5-10', '>10'];
  public pieChartWordCountLabels: Label[] = ['<500', '500-1000', '>1000'];

  public pieChartPageCountData: number[] = [];
  public pieChartWordCountData: number[] = [];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['orange', 'teal', 'aqua'],
    },
  ];

  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    this.archives();
    // this.showAnalysis();
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
              artLimit.imageSource = "assets/image-not-found.png";
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
    if(this.showAnalysisButton>0){
      this.showAnalysis();
    }
  }

  hideAnalysis(){
    this.showAnalysisButton = 0;
  }

  showAnalysis(){
    this.showAnalysisButton = 1;
    this.articleWordCount = {'<500':0, '500-1000':0, '>1000':0};
    this.articlePageCount = {'<5':0, '5-10':0, '>10':0};
    this.articleCriteria = {}
    this.pieChartPageCountData = [];
    this.tempArray = [];
    this.tempArray2 = [];
    this.pieChartWordCountData = [];
    this.newsapi.archives(this.month,this.year).subscribe(data => {
      console.log(data);
      this.articleAnalysis = data['response']['docs'];
      this.articleAnalysis.forEach(artLimit =>{
        if(artLimit.news_desk != undefined){
          if(artLimit.news_desk in this.articleCriteria){
            this.articleCriteria[artLimit.news_desk] = this.articleCriteria[artLimit.news_desk] + 1
          }
          else{
            this.articleCriteria[artLimit.news_desk] = 0;
          }
        }
        if(artLimit.word_count<500){
          this.articleWordCount['<500'] = this.articleWordCount['<500'] + 1;
        }
        else if(artLimit.word_count>500 && artLimit.word_count<1000){
          this.articleWordCount['500-1000'] = this.articleWordCount['500-1000'] + 1;
        }
        else if(artLimit.word_count>1000){
          this.articleWordCount['>1000'] = this.articleWordCount['>1000'] + 1;
        }
        if(parseInt(artLimit.print_page)<5){
          this.articlePageCount['<5'] = this.articlePageCount['<5'] + 1;
        }
        else if(parseInt(artLimit.print_page)>5 && parseInt(artLimit.print_page)<10){
          this.articlePageCount['5-10'] = this.articlePageCount['5-10'] + 1;
        }
        else if(parseInt(artLimit.print_page)>10){
          this.articlePageCount['>10'] = this.articlePageCount['>10'] + 1;
        }
      });
      for (var key in this.articlePageCount){
        this.tempArray.push(this.articlePageCount[key]);
      }
      console.log(this.tempArray);
      this.pieChartPageCountData = this.tempArray;
      // this.pieChartPageCountData = Object.keys(this.articlePageCount).map(function(key){
      //   return this.articlePageCount[key];
      // });
      for (var key in this.articleWordCount){
        this.tempArray2.push(this.articleWordCount[key]);
      }
      console.log(this.tempArray2);
      this.pieChartWordCountData = this.tempArray2;

      console.log(this.articleWordCount);
      console.log(this.articlePageCount);
      console.log(this.articleCriteria);
    });

  }

}
