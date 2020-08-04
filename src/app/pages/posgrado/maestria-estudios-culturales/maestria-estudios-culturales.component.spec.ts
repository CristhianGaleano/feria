import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaEstudiosCulturalesComponent } from './maestria-estudios-culturales.component';

describe('MaestriaEstudiosCulturalesComponent', () => {
  let component: MaestriaEstudiosCulturalesComponent;
  let fixture: ComponentFixture<MaestriaEstudiosCulturalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaEstudiosCulturalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaEstudiosCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
