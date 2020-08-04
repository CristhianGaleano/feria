import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionSocialComponent } from './comunicacion-social.component';

describe('ComunicacionSocialComponent', () => {
  let component: ComunicacionSocialComponent;
  let fixture: ComponentFixture<ComunicacionSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
