import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrComponent } from './otr.component';

describe('OtrComponent', () => {
  let component: OtrComponent;
  let fixture: ComponentFixture<OtrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrComponent]
    });
    fixture = TestBed.createComponent(OtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
