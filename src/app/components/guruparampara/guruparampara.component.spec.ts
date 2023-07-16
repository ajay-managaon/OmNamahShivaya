import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruparamparaComponent } from './guruparampara.component';

describe('GuruparamparaComponent', () => {
  let component: GuruparamparaComponent;
  let fixture: ComponentFixture<GuruparamparaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuruparamparaComponent]
    });
    fixture = TestBed.createComponent(GuruparamparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
