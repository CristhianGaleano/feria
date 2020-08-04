import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUnoComponent } from './menu-uno.component';

describe('MenuUnoComponent', () => {
  let component: MenuUnoComponent;
  let fixture: ComponentFixture<MenuUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
