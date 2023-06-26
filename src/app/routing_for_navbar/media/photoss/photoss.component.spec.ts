import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotossComponent } from './photoss.component';

describe('PhotossComponent', () => {
  let component: PhotossComponent;
  let fixture: ComponentFixture<PhotossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotossComponent]
    });
    fixture = TestBed.createComponent(PhotossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
