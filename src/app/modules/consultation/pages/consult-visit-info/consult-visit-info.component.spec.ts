import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConsultVisitInfoComponent } from "./consult-visit-info.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("ConsultVisitInfoComponent", () => {
  let component: ConsultVisitInfoComponent;
  let fixture: ComponentFixture<ConsultVisitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ConsultVisitInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
