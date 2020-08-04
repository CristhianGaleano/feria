import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionPsicologiaClinicaComponent } from './especializacion-psicologia-clinica.component';

describe('EspecializacionPsicologiaClinicaComponent', () => {
  let component: EspecializacionPsicologiaClinicaComponent;
  let fixture: ComponentFixture<EspecializacionPsicologiaClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionPsicologiaClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionPsicologiaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
