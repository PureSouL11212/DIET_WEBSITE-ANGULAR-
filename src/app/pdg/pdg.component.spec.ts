import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgComponent } from './pdg.component';

describe('PdgComponent', () => {
  let component: PdgComponent;
  let fixture: ComponentFixture<PdgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdgComponent]
    });
    fixture = TestBed.createComponent(PdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
