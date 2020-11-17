import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaGestionProyectosComponent } from './maestria-gestion-proyectos.component';

describe('MaestriaGestionProyectosComponent', () => {
  let component: MaestriaGestionProyectosComponent;
  let fixture: ComponentFixture<MaestriaGestionProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaGestionProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaGestionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
