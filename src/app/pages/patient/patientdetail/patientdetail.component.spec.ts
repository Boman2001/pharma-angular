import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailComponent } from './patientdetail.component';

describe('PatientdetailComponent', () => {
  let component: PatientdetailComponent;
  let fixture: ComponentFixture<PatientdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
