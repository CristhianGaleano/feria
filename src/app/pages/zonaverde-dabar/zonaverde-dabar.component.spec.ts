import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaverdeDabarComponent } from './zonaverde-dabar.component';

describe('ZonaverdeDabarComponent', () => {
  let component: ZonaverdeDabarComponent;
  let fixture: ComponentFixture<ZonaverdeDabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaverdeDabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaverdeDabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
