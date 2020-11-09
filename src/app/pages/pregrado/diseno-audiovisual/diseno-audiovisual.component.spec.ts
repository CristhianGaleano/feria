import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoAudiovisualComponent } from './diseno-audiovisual.component';

describe('DisenoAudiovisualComponent', () => {
  let component: DisenoAudiovisualComponent;
  let fixture: ComponentFixture<DisenoAudiovisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoAudiovisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoAudiovisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
