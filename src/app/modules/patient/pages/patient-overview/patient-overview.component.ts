import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BaseEntity } from "src/app/modules/core/core.module";
import { PatientService } from "../../services/patient.service";

@Component({
  selector: "app-patient-overview",
  templateUrl: "./patient-overview.component.html",
  styleUrls: ["./patient-overview.component.css"]
})
export class PatientOverviewComponent implements OnInit {

  headerArray: string[] = [
    "Name",
    "BSN",
    "Email",
    "Dob",
    "Gender",
    "PhoneNumber",
    "City",
    "Street",
    "HouseNumber",
    "HouseNumberAddon",
    "PostalCode",

  ];
  actionsArray: { id: string, class: string, icon: string, action: (entity: BaseEntity) => void }[] = [
    {
      id: "patient-detail",
      class: "btn btn-primary",
      icon: '<i class="fas fa-eye"></i>',
      action: (entity: BaseEntity) => {
        this.router.navigate(['/' + entity.Id])
      }
    },
    {
      id: "patient-edit",
      class: "btn btn-warning",
      icon: '<i class="fas fa-pencil-alt"></i>',
      action: (entity: BaseEntity) => {
        this.router.navigate(['/' + entity.Id + '/edit'])
      }
    },
    {
      id: "patient-delete",
      class: "btn btn-danger",
      icon: '<i class="fas fa-trash-alt"></i>',
      action: (entity: BaseEntity) => {
        console.log(entity.Id);
      }
    }
  ];


  constructor(public patientService: PatientService, public router: Router) { }

  ngOnInit(): void {
  }

}
