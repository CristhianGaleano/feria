import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpecializacionArquitecturaBioclimaticaComponent } from './epecializacion-arquitectura-bioclimatica.component';

describe('EpecializacionArquitecturaBioclimaticaComponent', () => {
  let component: EpecializacionArquitecturaBioclimaticaComponent;
  let fixture: ComponentFixture<EpecializacionArquitecturaBioclimaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpecializacionArquitecturaBioclimaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpecializacionArquitecturaBioclimaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
