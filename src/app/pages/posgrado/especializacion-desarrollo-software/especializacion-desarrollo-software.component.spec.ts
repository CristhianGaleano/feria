import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionDesarrolloSoftwareComponent } from './especializacion-desarrollo-software.component';

describe('EspecializacionDesarrolloSoftwareComponent', () => {
  let component: EspecializacionDesarrolloSoftwareComponent;
  let fixture: ComponentFixture<EspecializacionDesarrolloSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionDesarrolloSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionDesarrolloSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
