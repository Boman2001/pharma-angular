import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienteditComponent } from './patientedit.component';

describe('PatienteditComponent', () => {
  let component: PatienteditComponent;
  let fixture: ComponentFixture<PatienteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
