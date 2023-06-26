import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternallinksComponent } from './internallinks.component';

describe('InternallinksComponent', () => {
  let component: InternallinksComponent;
  let fixture: ComponentFixture<InternallinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternallinksComponent]
    });
    fixture = TestBed.createComponent(InternallinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
