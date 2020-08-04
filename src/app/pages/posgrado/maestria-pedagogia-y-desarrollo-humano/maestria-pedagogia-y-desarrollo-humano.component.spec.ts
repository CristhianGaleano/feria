import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaPedagogiaYDesarrolloHumanoComponent } from './maestria-pedagogia-y-desarrollo-humano.component';

describe('MaestriaPedagogiaYDesarrolloHumanoComponent', () => {
  let component: MaestriaPedagogiaYDesarrolloHumanoComponent;
  let fixture: ComponentFixture<MaestriaPedagogiaYDesarrolloHumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaPedagogiaYDesarrolloHumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaPedagogiaYDesarrolloHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
