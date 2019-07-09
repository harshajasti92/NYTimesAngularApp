import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatSelectModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsApiService } from './news-api.service';
import { MostPopularArticlesComponent } from './most-popular-articles/most-popular-articles.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { ArchivesComponent } from './archives/archives.component'

@NgModule({
  declarations: [
    AppComponent,
    MostPopularArticlesComponent,
    TopStoriesComponent,
    SearchArticleComponent,
    MovieReviewsComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
