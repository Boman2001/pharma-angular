import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultCreateComponent } from "./consult-create.component";

describe("ConsultCreateComponent", () => {
  let component: ConsultCreateComponent;
  let fixture: ComponentFixture<ConsultCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
