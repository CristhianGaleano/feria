import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaArquitecturaUrbanismoComponent } from './maestria-arquitectura-urbanismo.component';

describe('MaestriaArquitecturaUrbanismoComponent', () => {
  let component: MaestriaArquitecturaUrbanismoComponent;
  let fixture: ComponentFixture<MaestriaArquitecturaUrbanismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaArquitecturaUrbanismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaArquitecturaUrbanismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
