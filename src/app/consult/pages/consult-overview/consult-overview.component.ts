import { Component, OnInit } from "@angular/core";
import {ModalDismissReasons, NgbCalendar, NgbDate, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-consult-overview",
  templateUrl: "./consult-overview.component.html",
  styleUrls: ["./consult-overview.component.css"]
})
export class ConsultOverviewComponent implements OnInit {
  date: NgbDateStruct;

  constructor(private calendar: NgbCalendar, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.date = this.calendar.getToday();
  }

  selectToday(): void {
    this.date = this.calendar.getToday();
  }

  nextDay(): void {
    this.date = this.calendar.getNext(new NgbDate(this.date.year, this.date.month, this.date.day));
  }

  prevDay(): void {
    this.date = this.calendar.getPrev(new NgbDate(this.date.year, this.date.month, this.date.day));
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: "modal-basic-title"});
  }
}
