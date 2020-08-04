import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStandComponent } from './menu-stand.component';

describe('MenuStandComponent', () => {
  let component: MenuStandComponent;
  let fixture: ComponentFixture<MenuStandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
