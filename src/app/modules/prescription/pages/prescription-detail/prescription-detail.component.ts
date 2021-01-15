import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionService } from "../../services/prescription.service";
import { Prescription } from "../../models/prescription.model";
import {Gender} from "../../../core/enums/gender.enum";
import {Patient} from "../../../patient/models/patient.model";
import {User} from "../../../user/models/user.model";


@Component({
  selector: "app-prescription-detail",
  templateUrl: "./prescription-detail.component.html",
  styleUrls: ["./prescription-detail.component.css"]
})
export class PrescriptionDetailComponent implements OnInit {

  prescription: Prescription;

  constructor(
    private route: ActivatedRoute,
    public prescriptionService: PrescriptionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.retrievePrescriptionData(params.get("id"));
    });
  }

  public getAge(entity: User | Patient): number {
    if (!entity) {
      return null;
    }

    // @TODO: !!! ACTUAL RELIABLE AGE CALCULATION !!!
    return Math.floor((((new Date().valueOf() - new Date(entity.dob).valueOf()) / (24 * 60 * 60 * 1000)) / 365.242));
  }

  public getDob(entity: User | Patient): Date {
    if (!entity) {
      return null;
    }

    return new Date(entity.dob);
  }

  public getGender(entity: User | Patient): string {
    if (!entity) {
      return null;
    }

    switch (entity.gender) {
      case Gender.MALE:
        return "Man";

      case Gender.FEMALE:
        return "Vrouw";

      default:
        return "Overige";
    }
  }

  private retrievePrescriptionData(id: string): void {
    this.prescriptionService.Get(id).toPromise()
      .then(async (p: Prescription) => {
        if (p == null || p.id == null) {
          // @TODO: Global modal service, ToastService?
          console.error("Prescription could not be found...");
          try {
            await this.router.navigate(["prescriptions"]);
          }
          catch (e) {
            // @TODO: Global modal/Toast??
          }
          return;
        }
        this.prescription = p;
      })
      .catch(async (e) => {
        console.error("API could not be reached...");
        // @TODO: Global modal service, ToastService?
        await this.router.navigate(["prescriptions"]);
        try {
          await this.router.navigate(["prescriptions"]);
        }
        catch (ex) {
          // @TODO: Global modal/Toast??
        }
        return;
      });
  }
}
