import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpecializacionGestionConstruccionSostenibleComponent } from './epecializacion-gestion-construccion-sostenible.component';

describe('EpecializacionGestionConstruccionSostenibleComponent', () => {
  let component: EpecializacionGestionConstruccionSostenibleComponent;
  let fixture: ComponentFixture<EpecializacionGestionConstruccionSostenibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpecializacionGestionConstruccionSostenibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpecializacionGestionConstruccionSostenibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
