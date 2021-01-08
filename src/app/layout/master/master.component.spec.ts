import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MasterComponent } from "./master.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("MasterComponent", () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterComponent ],
      imports: [RouterTestingModule]
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

  it("should have 5 nav items", () => {
    const compiled = fixture.debugElement.nativeElement;
    const nav = compiled.querySelector(".sidebar ul");
    expect(nav.children.length).toEqual(5);
  });
});
