import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngIndustrialComponent } from './ing-industrial.component';

describe('IngIndustrialComponent', () => {
  let component: IngIndustrialComponent;
  let fixture: ComponentFixture<IngIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
