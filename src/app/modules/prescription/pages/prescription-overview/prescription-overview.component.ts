import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseEntity } from "src/app/modules/core/core.module";
import { PrescriptionService } from "../../services/prescription.service";

@Component({
  selector: "app-prescription-overview",
  templateUrl: "./prescription-overview.component.html",
  styleUrls: ["./prescription-overview.component.css"]
})
export class PrescriptionOverviewComponent implements OnInit {

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
      id: "prescription-detail",
      class: "btn btn-primary",
      icon: '<i class="fas fa-eye"></i>',
      action: (entity: BaseEntity) => {
        this.router.navigate(['/' + entity.Id])
      }
    },
  ];

  constructor(public prescriptionService: PrescriptionService, public router: Router) { }

  ngOnInit(): void {
  }

}
