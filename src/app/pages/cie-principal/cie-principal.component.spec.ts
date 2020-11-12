import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiePrincipalComponent } from './cie-principal.component';

describe('CiePrincipalComponent', () => {
  let component: CiePrincipalComponent;
  let fixture: ComponentFixture<CiePrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiePrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
