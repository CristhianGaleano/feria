import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionEdumaticaComponent } from './especializacion-edumatica.component';

describe('EspecializacionEdumaticaComponent', () => {
  let component: EspecializacionEdumaticaComponent;
  let fixture: ComponentFixture<EspecializacionEdumaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionEdumaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionEdumaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
