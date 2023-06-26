import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterimageComponent } from './footerimage.component';

describe('FooterimageComponent', () => {
  let component: FooterimageComponent;
  let fixture: ComponentFixture<FooterimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterimageComponent]
    });
    fixture = TestBed.createComponent(FooterimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
