import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientoverviewComponent } from './patientoverview.component';

describe('PatientoverviewComponent', () => {
  let component: PatientoverviewComponent;
  let fixture: ComponentFixture<PatientoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
