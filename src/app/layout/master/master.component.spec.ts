import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MasterComponent } from "./master.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../modules/auth/auth.module";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { StorageService } from "../../modules/core/core.module";

describe("MasterComponent", () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler,
        StorageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have logo", () => {
    const compiled = fixture.debugElement.nativeElement;
    const img = compiled.querySelector("header img");
    expect(img).toBeTruthy();
  });

  it("should have 7 nav items", () => {
    const compiled = fixture.debugElement.nativeElement;
    const nav = compiled.querySelector(".sidebar ul");

    // Minimum of 6, when the user is an admin the activities item will be shown.
    expect(nav.children.length).toBeGreaterThanOrEqual(6);
  });
});
