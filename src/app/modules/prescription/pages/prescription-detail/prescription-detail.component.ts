import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionService } from "../../services/prescription.service";
import { Prescription } from "../../models/prescription.model";
import {Gender} from "../../../core/enums/gender.enum";
import {Patient} from "../../../patient/models/patient.model";
import {User} from "../../../user/models/user.model";
import * as moment from "moment";


@Component({
  selector: "app-prescription-detail",
  templateUrl: "./prescription-detail.component.html",
  styleUrls: ["./prescription-detail.component.css"]
})
export class PrescriptionDetailComponent implements OnInit {

  public moment = moment;
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
