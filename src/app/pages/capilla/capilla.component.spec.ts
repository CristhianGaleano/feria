import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapillaComponent } from './capilla.component';

describe('CapillaComponent', () => {
  let component: CapillaComponent;
  let fixture: ComponentFixture<CapillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
