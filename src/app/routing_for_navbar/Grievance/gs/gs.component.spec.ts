import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsComponent } from './gs.component';

describe('GsComponent', () => {
  let component: GsComponent;
  let fixture: ComponentFixture<GsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsComponent]
    });
    fixture = TestBed.createComponent(GsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
