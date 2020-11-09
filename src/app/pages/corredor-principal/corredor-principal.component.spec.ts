import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredorPrincipalComponent } from './corredor-principal.component';

describe('CorredorPrincipalComponent', () => {
  let component: CorredorPrincipalComponent;
  let fixture: ComponentFixture<CorredorPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredorPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredorPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
