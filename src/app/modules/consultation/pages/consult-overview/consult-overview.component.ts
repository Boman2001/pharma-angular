import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgbCalendar, NgbDate, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { ConsultationService } from "../../services/consultation.service";
import { User } from "../../../user/user.module";
import { Patient } from "../../../patient/models/patient.model";


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

  headerArray: TableHeader[] = [
    {
      key: "date",
      text: "Datum",
      transform: (date: string) => {
        return new Date(date).toDateString();
      }
    },
    {
      key: "doctor",
      text: "Arts",
      transform: (d: User) => {
        return d?.name || "-";
      }
    },
    {
      key: "patient",
      text: "Patiënt",
      transform: (p: Patient) => {
        return p?.name || "-";
      }
    },
  ];

  actionsArray: TableAction[] = [
    {
      id: "consult-detail",
      name: "Detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/consultation/${entity.id}`]);
      }
    },
    {
      id: "consult-edit",
      name: "Aanpassen",
      classes: ["btn", "btn-warning"],
      icon: `pencil-alt`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/consultation/${entity.id}/edit`]);
      }
    },
    {
      id: "consult-delete",
      name: "Delete",
      classes: ["btn", "btn-danger"],
      icon: `trash-alt`,
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

  changeDate(date: NgbDateStruct): void {
    if (this.dataTable != null) {
      this.dataTable.tableService.searchTerm = this.date.year + "-" + this.date.month + "-" + this.date.day;
    }
  }

  onCreateComplete(result: boolean): void {
    this.dataTable.tableService.refresh();
  }
}
