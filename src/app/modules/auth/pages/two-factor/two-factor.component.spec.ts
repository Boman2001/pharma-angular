import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TwoFactorComponent } from "./two-factor.component";
import {AuthModule} from "../../auth.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {StorageService} from "../../../core/services/storage.service";
import {FormBuilder} from "@angular/forms";

describe("TwoFactorComponent", () => {
  let component: TwoFactorComponent;
  let fixture: ComponentFixture<TwoFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFactorComponent ],
      imports: [
        AuthModule,
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        StorageService,
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
