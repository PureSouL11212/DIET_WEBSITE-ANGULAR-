import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program6Component } from './program6.component';

describe('Program6Component', () => {
  let component: Program6Component;
  let fixture: ComponentFixture<Program6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Program6Component]
    });
    fixture = TestBed.createComponent(Program6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
