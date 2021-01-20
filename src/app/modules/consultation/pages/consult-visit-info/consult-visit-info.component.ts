import {Component, OnInit } from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {NgbCalendar, NgbDate, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ConsultationService} from "../../services/consultation.service";
import {switchMap} from "rxjs/operators";
import {Consultation} from "../../models/consultation.model";
import {Observable} from "rxjs";
import * as moment from "moment";
import {Gender} from "../../../core/enums/gender.enum";

@Component({
  selector: "app-consult-visit-info",
  templateUrl: "./consult-visit-info.component.html",
  styleUrls: ["./consult-visit-info.component.css"]
})
export class ConsultVisitInfoComponent implements OnInit {
  model: NgbDateStruct;
  time: string;
  consultation$: Observable<Consultation>;
  map: string;
  moment = moment;

  constructor(public sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private service: ConsultationService,
              private calendar: NgbCalendar) {
  }

  ngOnInit(): void {
    this.consultation$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.service.Get(params.get("id"))
      )
    );

    this.consultation$.subscribe(c => {
      const date = moment(c.date);
      this.model = this.calendar.getNext(new NgbDate(date.year(), date.month() + 1, date.date() - 1));
      this.time = date.format("HH:mm");
      this.map = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCBVzozETyDe794IpgWsIe7zi5iFwCPP54&q=${c.patient.street} ${c.patient.houseNumber}${c.patient.houseNumberAddon},${c.patient.city},${c.patient.country}`;
    });
  }

  getGender(gender: Gender): string {
    switch (gender) {
      case Gender.MALE:
        return "Man";

      case Gender.FEMALE:
        return "Vrouw";

      default:
        return "Overige";
    }
  }
}
