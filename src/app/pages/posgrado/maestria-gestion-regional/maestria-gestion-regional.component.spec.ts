import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaGestionRegionalComponent } from './maestria-gestion-regional.component';

describe('MaestriaGestionRegionalComponent', () => {
  let component: MaestriaGestionRegionalComponent;
  let fixture: ComponentFixture<MaestriaGestionRegionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaGestionRegionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaGestionRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
