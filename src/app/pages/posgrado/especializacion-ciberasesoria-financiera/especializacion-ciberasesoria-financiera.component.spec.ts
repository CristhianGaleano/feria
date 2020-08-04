import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionCiberasesoriaFinancieraComponent } from './especializacion-ciberasesoria-financiera.component';

describe('EspecializacionCiberasesoriaFinancieraComponent', () => {
  let component: EspecializacionCiberasesoriaFinancieraComponent;
  let fixture: ComponentFixture<EspecializacionCiberasesoriaFinancieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionCiberasesoriaFinancieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionCiberasesoriaFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
