import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcreateComponent } from './patientcreate.component';

describe('PatientcreateComponent', () => {
  let component: PatientcreateComponent;
  let fixture: ComponentFixture<PatientcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
