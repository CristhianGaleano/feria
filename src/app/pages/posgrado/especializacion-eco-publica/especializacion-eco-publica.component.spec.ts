import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionEcoPublicaComponent } from './especializacion-eco-publica.component';

describe('EspecializacionEcoPublicaComponent', () => {
  let component: EspecializacionEcoPublicaComponent;
  let fixture: ComponentFixture<EspecializacionEcoPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionEcoPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionEcoPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
