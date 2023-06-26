import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajyasabhaComponent } from './rajyasabha.component';

describe('RajyasabhaComponent', () => {
  let component: RajyasabhaComponent;
  let fixture: ComponentFixture<RajyasabhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajyasabhaComponent]
    });
    fixture = TestBed.createComponent(RajyasabhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
