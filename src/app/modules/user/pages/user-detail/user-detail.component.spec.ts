import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserDetailComponent } from "./user-detail.component";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import { UserService } from "../../services/user.service";
import { of } from "rxjs";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";


describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ UserDetailComponent ],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 1 })) }
        },
      ]
    })
    .compileComponents();
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
