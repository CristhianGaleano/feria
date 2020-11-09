import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadeoMatriculasComponent } from './mercadeo-matriculas.component';

describe('MercadeoMatriculasComponent', () => {
  let component: MercadeoMatriculasComponent;
  let fixture: ComponentFixture<MercadeoMatriculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadeoMatriculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadeoMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
