import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoIndustrialComponent } from './diseno-industrial.component';

describe('DisenoIndustrialComponent', () => {
  let component: DisenoIndustrialComponent;
  let fixture: ComponentFixture<DisenoIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
