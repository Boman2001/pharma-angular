import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../../services/user.service";

import { UserOverviewComponent } from "./user-overview.component";

describe("UserOverviewComponent", () => {
  let component: UserOverviewComponent;
  let fixture: ComponentFixture<UserOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOverviewComponent],
      providers: [
        UserService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
