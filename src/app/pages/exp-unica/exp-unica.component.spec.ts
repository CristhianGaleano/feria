import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpUnicaComponent } from './exp-unica.component';

describe('ExpUnicaComponent', () => {
  let component: ExpUnicaComponent;
  let fixture: ComponentFixture<ExpUnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpUnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
