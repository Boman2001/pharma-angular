import {Component, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { PatientService } from "../../services/patient.service";


@Component({
  selector: "app-patient-overview",
  templateUrl: "./patient-overview.component.html",
  styleUrls: ["./patient-overview.component.css"]
})
export class PatientOverviewComponent {

  private patientEmitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: TableHeader[] = [
    { key: "name", text: "Naam" },
    { key: "email", text: "Email" },
    {
      key: "dob",
      text: "Geboortedatum",
      transform: (e: string) => {
        return new Date(e).toDateString();
      }
    },
    {
      key: "gender",
      text: "Geslacht",
      transform: (e: number) => {
        switch (e) {
          case 0:
            return "Man";

          case 1:
            return "Vrouw";

          default:
            return "Overig";
        }
      }
    },
    { key: "phoneNumber", text: "Telefoonnummer" },
    { key: "bsn", text: "BSN" },
  ];
  actionsArray: TableAction[] = [
    {
      id: "patient-detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/patients/${entity.id}`]);
      }
    },
    {
      id: "patient-edit",
      classes: ["btn", "btn-warning"],
      icon: `pencil-alt`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/patients/${entity.id}/edit`]);
      }
    },
    {
      id: "patient-delete",
      classes: ["btn", "btn-danger"],
      icon: `trash-alt`,
      action: (entity: BaseEntity) => {
        this.patientEmitter.next(entity);
      }
    }
  ];

  @ViewChild("patientsTable") table;

  constructor(public patientService: PatientService, public router: Router) {
    this.deleteEntity = new Observable(e => this.patientEmitter = e);
  }

  onDeleteComplete(success): void {
    // @TODO: The API doesn't return true;
    // if (success) {
    //   this.table.tableService.refresh();
    // }
    this.table.tableService.refresh();
  }
}
