import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFotosComponent } from './carousel-fotos.component';

describe('CarouselFotosComponent', () => {
  let component: CarouselFotosComponent;
  let fixture: ComponentFixture<CarouselFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
