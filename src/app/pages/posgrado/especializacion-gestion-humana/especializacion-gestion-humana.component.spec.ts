import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionGestionHumanaComponent } from './especializacion-gestion-humana.component';

describe('EspecializacionGestionHumanaComponent', () => {
  let component: EspecializacionGestionHumanaComponent;
  let fixture: ComponentFixture<EspecializacionGestionHumanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionGestionHumanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionGestionHumanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
