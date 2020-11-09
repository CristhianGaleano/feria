import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecDesarrolloSoftwareComponent } from './tec-desarrollo-software.component';

describe('TecDesarrolloSoftwareComponent', () => {
  let component: TecDesarrolloSoftwareComponent;
  let fixture: ComponentFixture<TecDesarrolloSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecDesarrolloSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecDesarrolloSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
