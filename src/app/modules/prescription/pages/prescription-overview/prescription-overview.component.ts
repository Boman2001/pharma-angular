import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { PrescriptionService } from "../../services/prescription.service";
import { Consultation } from "../../../consultation/models/consultation.model";
import {Patient} from "../../../patient/models/patient.model";


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
        return c?.id != null ? `Consult op ${ new Date(c.date).toDateString() }` : "-";
      }
    },
    {
      key: "patient",
      text: "Patiënt",
      transform: (p: Patient) => {
        return p?.id != null ? p.name : "-";
      }
    },
    { key: "description", text: "Beschrijving" },
    {
      key: "startDate",
      text: "Startdatum",
      transform: (d: string) => {
        return new Date(d).toDateString();
      }
    },
    {
      key: "endDate",
      text: "Einddatum",
      transform: (d: string) => {
        return new Date(d).toDateString();
      }
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
