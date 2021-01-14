import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { PrescriptionService } from "../../services/prescription.service";
import { Consultation } from "../../../consultation/models/consultation.model";


@Component({
  selector: "app-prescription-overview",
  templateUrl: "./prescription-overview.component.html",
  styleUrls: ["./prescription-overview.component.css"]
})
export class PrescriptionOverviewComponent {

  headerArray: TableHeader[] = [
    {
      key: "consultation",
      text: "Consult",
      transform: (c: Consultation) => {
        return `Consult op ${ new Date(c.date).toDateString() }`;
      }
    },
    {
      key: "patient",
      text: "Patiënt"
    },
    { key: "description", text: "Beschrijving" },
    {
      key: "startDate",
      text: "Startdatum"
    },
    {
      key: "endDate",
      text: "Einddatum"
    },
  ];
  actionsArray: TableAction[] = [
    {
      id: "prescription-detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/prescriptions/${entity.id}`]);
      }
    },
  ];

  constructor(public prescriptionService: PrescriptionService, public router: Router) { }
}
