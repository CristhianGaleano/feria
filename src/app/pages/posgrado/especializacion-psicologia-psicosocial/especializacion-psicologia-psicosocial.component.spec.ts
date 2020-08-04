import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionPsicologiaPsicosocialComponent } from './especializacion-psicologia-psicosocial.component';

describe('EspecializacionPsicologiaPsicosocialComponent', () => {
  let component: EspecializacionPsicologiaPsicosocialComponent;
  let fixture: ComponentFixture<EspecializacionPsicologiaPsicosocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionPsicologiaPsicosocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionPsicologiaPsicosocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
