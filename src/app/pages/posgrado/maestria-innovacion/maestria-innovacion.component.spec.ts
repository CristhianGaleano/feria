import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaInnovacionComponent } from './maestria-innovacion.component';

describe('MaestriaInnovacionComponent', () => {
  let component: MaestriaInnovacionComponent;
  let fixture: ComponentFixture<MaestriaInnovacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaInnovacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaInnovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
