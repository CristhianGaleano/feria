import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDosComponent } from './menu-dos.component';

describe('MenuDosComponent', () => {
  let component: MenuDosComponent;
  let fixture: ComponentFixture<MenuDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
