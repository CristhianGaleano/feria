import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AletehiaComponent } from './aletehia.component';

describe('AletehiaComponent', () => {
  let component: AletehiaComponent;
  let fixture: ComponentFixture<AletehiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AletehiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AletehiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
