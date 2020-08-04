import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoradoEducacionComponent } from './doctorado-educacion.component';

describe('DoctoradoEducacionComponent', () => {
  let component: DoctoradoEducacionComponent;
  let fixture: ComponentFixture<DoctoradoEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoradoEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoradoEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
