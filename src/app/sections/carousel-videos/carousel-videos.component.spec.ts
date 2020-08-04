import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVideosComponent } from './carousel-videos.component';

describe('CarouselVideosComponent', () => {
  let component: CarouselVideosComponent;
  let fixture: ComponentFixture<CarouselVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
