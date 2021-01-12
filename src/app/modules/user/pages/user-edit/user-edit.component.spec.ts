import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserEditComponent } from "./user-edit.component";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { of } from "rxjs";
import { HttpClient, HttpHandler } from "@angular/common/http";


describe("UserEditComponent", () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditComponent ],
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
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
