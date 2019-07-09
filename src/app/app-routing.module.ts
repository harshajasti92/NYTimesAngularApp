import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MostPopularArticlesComponent }   from './most-popular-articles/most-popular-articles.component';
import { TopStoriesComponent }   from './top-stories/top-stories.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { ArchivesComponent } from './archives/archives.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/top-stories', pathMatch: 'full' },
  { path: 'most-popular-articles', component: MostPopularArticlesComponent },
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'search', component: SearchArticleComponent },
  { path: 'movie-reviews', component: MovieReviewsComponent },
  { path: 'archives', component: ArchivesComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
