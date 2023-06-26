import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoksabhaComponent } from './loksabha.component';

describe('LoksabhaComponent', () => {
  let component: LoksabhaComponent;
  let fixture: ComponentFixture<LoksabhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoksabhaComponent]
    });
    fixture = TestBed.createComponent(LoksabhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
