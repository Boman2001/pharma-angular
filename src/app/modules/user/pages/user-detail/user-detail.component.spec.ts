import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserDetailComponent } from "./user-detail.component";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { UserService } from "../../services/user.service";
import { of } from "rxjs";
import { RouterTestingModule } from "@angular/router/testing";
import { ConsultationService } from "../../../consultation/consultation.module";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { User } from "../../models/user.model";


const mockData: User = {
  id: "44b64f8b-fe1b-44e3-9e0e-7be935660951", // Random ID
  name: "Test Test",
  email: "test@example.com",
  city: "Teststad",
  country: "NL",
  dob: new Date(),
  gender: 0,
  houseNumber: "123",
  houseNumberAddon: "A",
  phoneNumber: "+31612345678",
  postalCode: "1234AB",
  street: "Teststraat",
  username: "test",
};

describe("UserDetailComponent", () => {
  let service: ConsultationService;
  let http;
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ UserDetailComponent ],
      providers: [
        UserService,
        ConsultationService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 1 })) }
        },
      ]
    })
    .compileComponents();

    service = TestBed.inject(ConsultationService);
    http = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
