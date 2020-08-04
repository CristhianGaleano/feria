import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionPedagogiaComponent } from './especializacion-pedagogia.component';

describe('EspecializacionPedagogiaDesarrolloHumanoComponent', () => {
  let component: EspecializacionPedagogiaComponent;
  let fixture: ComponentFixture<EspecializacionPedagogiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecializacionPedagogiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializacionPedagogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
