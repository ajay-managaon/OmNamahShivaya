import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeerthakshethraComponent } from './teerthakshethra.component';

describe('TeerthakshethraComponent', () => {
  let component: TeerthakshethraComponent;
  let fixture: ComponentFixture<TeerthakshethraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeerthakshethraComponent]
    });
    fixture = TestBed.createComponent(TeerthakshethraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
