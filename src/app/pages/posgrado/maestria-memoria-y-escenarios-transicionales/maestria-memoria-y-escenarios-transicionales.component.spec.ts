import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaMemoriaYEscenariosTransicionalesComponent } from './maestria-memoria-y-escenarios-transicionales.component';

describe('MaestriaMemoriaYEscenariosTransicionalesComponent', () => {
  let component: MaestriaMemoriaYEscenariosTransicionalesComponent;
  let fixture: ComponentFixture<MaestriaMemoriaYEscenariosTransicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaMemoriaYEscenariosTransicionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaMemoriaYEscenariosTransicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
