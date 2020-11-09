import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaverdePeatonalComponent } from './zonaverde-peatonal.component';

describe('ZonaverdePeatonalComponent', () => {
  let component: ZonaverdePeatonalComponent;
  let fixture: ComponentFixture<ZonaverdePeatonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaverdePeatonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaverdePeatonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
