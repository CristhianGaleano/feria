import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaFinanzasComponent } from './maestria-finanzas.component';

describe('MaestriaFinanzasComponent', () => {
  let component: MaestriaFinanzasComponent;
  let fixture: ComponentFixture<MaestriaFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
