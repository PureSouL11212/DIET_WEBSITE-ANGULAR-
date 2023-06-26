import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcontactComponent } from './generalcontact.component';

describe('GeneralcontactComponent', () => {
  let component: GeneralcontactComponent;
  let fixture: ComponentFixture<GeneralcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralcontactComponent]
    });
    fixture = TestBed.createComponent(GeneralcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
