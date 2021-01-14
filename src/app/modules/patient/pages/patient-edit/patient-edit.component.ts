import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { PatientService } from "../../services/patient.service";
import { Patient } from "../../models/patient.model";


@Component({
  selector: "app-patient-edit",
  templateUrl: "./patient-edit.component.html",
  styleUrls: ["./patient-edit.component.css"]
})
export class PatientEditComponent {

  patient: Observable<Patient>;
  patientEmitter;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) {
    this.patient = new Observable<Patient>(e => this.patientEmitter = e);
    this.route.paramMap.subscribe(params => {
      this.patientService.Get(params.get("id")).toPromise()
        .then(async (p: Patient) => {
          if (p == null || p.id == null) {
            // @TODO: Global modal service, ToastService?
            console.error("Patient could not be found...");
            await router.navigate(["patients"]);
            return;
          }

          this.patientEmitter.next(p);
        })
        .catch(async (e) => {
          console.error("API could not be reached...");
          // @TODO: Global modal service, ToastService?
          await router.navigate(["patients"]);
          return;
        });
    });
  }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    // @TODO: GlobalModalService or ToastService
    if (saveResult)
    {
      await this.router.navigate(["patients"]);
      return;
    }
  }
}
