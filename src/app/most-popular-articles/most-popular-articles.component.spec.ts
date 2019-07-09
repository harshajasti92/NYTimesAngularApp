import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularArticlesComponent } from './most-popular-articles.component';

describe('MostPopularArticlesComponent', () => {
  let component: MostPopularArticlesComponent;
  let fixture: ComponentFixture<MostPopularArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
