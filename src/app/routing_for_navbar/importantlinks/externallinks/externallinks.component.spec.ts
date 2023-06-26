import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternallinksComponent } from './externallinks.component';

describe('ExternallinksComponent', () => {
  let component: ExternallinksComponent;
  let fixture: ComponentFixture<ExternallinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternallinksComponent]
    });
    fixture = TestBed.createComponent(ExternallinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
