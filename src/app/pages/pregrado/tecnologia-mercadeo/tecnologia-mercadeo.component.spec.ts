import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaMercadeoComponent } from './tecnologia-mercadeo.component';

describe('TecnologiaMercadeoComponent', () => {
  let component: TecnologiaMercadeoComponent;
  let fixture: ComponentFixture<TecnologiaMercadeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaMercadeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaMercadeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
