import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngSistemasComponent } from './ing-sistemas.component';

describe('IngSistemasComponent', () => {
  let component: IngSistemasComponent;
  let fixture: ComponentFixture<IngSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
