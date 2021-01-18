import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExaminationTypeCreateComponent } from "./examination-type-create.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("ExaminationTypeCreateComponent", () => {
  let component: ExaminationTypeCreateComponent;
  let fixture: ComponentFixture<ExaminationTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ExaminationTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
