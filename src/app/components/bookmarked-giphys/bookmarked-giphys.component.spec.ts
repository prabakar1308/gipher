import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedGiphysComponent } from './bookmarked-giphys.component';

describe('BookmarkedGiphysComponent', () => {
  let component: BookmarkedGiphysComponent;
  let fixture: ComponentFixture<BookmarkedGiphysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedGiphysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedGiphysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
