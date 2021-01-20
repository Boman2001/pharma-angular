import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Patient } from "../../models/patient.model";
import { PatientService } from "../../services/patient.service";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../../environments/environment";
import { Gender } from "../../../core/enums/gender.enum";
import { Observable } from "rxjs";
import { BaseEntity } from "../../../core/models/base-entity.model";
import * as moment from "moment";


@Component({
  selector: "app-patient-detail",
  templateUrl: "./patient-detail.component.html",
  styleUrls: ["./patient-detail.component.css"]
})
export class PatientDetailComponent implements OnInit {

  public moment = moment;
  public patientEmitter;
  public deleteEntity: Observable<BaseEntity>;
  patient: Patient;

  constructor(
    public sanitizer: DomSanitizer,
    public patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  )
  {
    this.deleteEntity = new Observable(e => this.patientEmitter = e);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.retrievePatientData(params.get("id"));
    });
  }

  get map(): string {
    return `https://www.google.com/maps/embed/v1/place?key=${ environment.googleKey }&q=${this.addressString}`;
  }

  get addressString(): string {
    if (this.patient?.id == null) {
      return null;
    }

    return `${this.patient.street} ${this.patient.houseNumber}${this.patient.houseNumberAddon},${this.patient.city},${this.patient.country}`;
  }

  public get gender(): string {
    switch (this.patient.gender) {
      case Gender.MALE:
        return "Man";

      case Gender.FEMALE:
        return "Vrouw";

      default:
        return "Overige";
    }
  }

  private retrievePatientData(id: string): void {
    this.patientService.Get(id).toPromise()
      .then(async (p: Patient) => {
        if (p == null || p.id == null) {
          // @TODO: Global modal service, ToastService?
          console.error("Patient could not be found...");
          try {
            await this.router.navigate(["patients"]);
          }
          catch (e) {
            // @TODO: Global modal/Toast??
          }
          return;
        }
        this.patient = p;
      })
      .catch(async (e) => {
        console.error("API could not be reached...");
        // @TODO: Global modal service, ToastService?
        await this.router.navigate(["patients"]);
        try {
          await this.router.navigate(["patients"]);
        }
        catch (ex) {
          // @TODO: Global modal/Toast??
        }
        return;
      });
  }

  async onDeleteComplete(success): Promise<void> {
    await this.router.navigate(["patients"]);
  }
}
