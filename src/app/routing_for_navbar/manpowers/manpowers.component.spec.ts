import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowersComponent } from './manpowers.component';

describe('ManpowersComponent', () => {
  let component: ManpowersComponent;
  let fixture: ComponentFixture<ManpowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManpowersComponent]
    });
    fixture = TestBed.createComponent(ManpowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
