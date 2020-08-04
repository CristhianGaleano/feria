import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionFinanzasComponent } from './especializacion-finanzas.component';

describe('EspecializacionFinanzasComponent', () => {
  let component: EspecializacionFinanzasComponent;
  let fixture: ComponentFixture<EspecializacionFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
