import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechesComponent } from './speeches.component';

describe('SpeechesComponent', () => {
  let component: SpeechesComponent;
  let fixture: ComponentFixture<SpeechesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechesComponent]
    });
    fixture = TestBed.createComponent(SpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
