import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbCalendar, NgbDate, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { BaseEntity } from "src/app/modules/core/core.module";

import { ConsultationService } from "../../services/consultation.service";

@Component({
  selector: "app-consult-overview",
  templateUrl: "./consult-overview.component.html",
  styleUrls: ["./consult-overview.component.css"]
})
export class ConsultOverviewComponent implements OnInit {
  date: NgbDateStruct;

  @ViewChild("dataTable") dataTable;

  private consultEmitter;
  public deleteEntity: Observable<BaseEntity>;

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
      id: "consult-detail",
      class: "btn btn-primary",
      icon: "<i class=\"fas fa-eye\"></i>",
      action: (entity: BaseEntity) => {
        this.router.navigate(["/" + entity.Id]);
      }
    },
    {
      id: "consult-edit",
      class: "btn btn-warning",
      icon: "<i class=\"fas fa-pencil-alt\"></i>",
      action: (entity: BaseEntity) => {
        this.router.navigate(["/" + entity.Id + "/edit"]);
      }
    },
    {
      id: "consult-delete",
      class: "btn btn-danger",
      icon: "<i class=\"fas fa-trash-alt\"></i>",
      action: (entity: BaseEntity) => {
        this.consultEmitter.next(entity);
      }
    }
  ];

  constructor(private calendar: NgbCalendar, public consultService: ConsultationService, public router: Router) {
    this.deleteEntity = new Observable(e => this.consultEmitter = e);
  }

  ngOnInit(): void {
    this.date = this.calendar.getToday();
    this.changeDate(this.date);
  }

  selectToday(): void {
    this.date = this.calendar.getToday();
    this.changeDate(this.date);
  }

  nextDay(): void {
    this.date = this.calendar.getNext(new NgbDate(this.date.year, this.date.month, this.date.day));
    this.changeDate(this.date);
  }

  prevDay(): void {
    this.date = this.calendar.getPrev(new NgbDate(this.date.year, this.date.month, this.date.day));
    this.changeDate(this.date);
  }

  // tslint:disable-next-line:typedef
  changeDate(date: NgbDateStruct) {
    if (this.dataTable != null) {
      this.dataTable.tableService.searchTerm = this.date.year + "-" + this.date.month + "-" + this.date.day;
    }
  }

}
