import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosInternacionalesComponent } from './negocios-internacionales.component';

describe('NegociosInternacionalesComponent', () => {
  let component: NegociosInternacionalesComponent;
  let fixture: ComponentFixture<NegociosInternacionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociosInternacionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociosInternacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
