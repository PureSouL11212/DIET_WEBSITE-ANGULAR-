import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomnavbarComponent } from './bottomnavbar.component';

describe('BottomnavbarComponent', () => {
  let component: BottomnavbarComponent;
  let fixture: ComponentFixture<BottomnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomnavbarComponent]
    });
    fixture = TestBed.createComponent(BottomnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
