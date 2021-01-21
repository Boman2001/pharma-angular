import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ConsultationService } from "../../services/consultation.service";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Consultation } from "../../models/consultation.model";
import { AdditionalExaminationResultService } from "../../../examination/services/additional-examination-result.service";
import { HttpParams } from "@angular/common/http";
import * as moment from "moment";

@Component({
  selector: "app-consult-visit-examination",
  templateUrl: "./consult-visit-examination.component.html",
  styleUrls: ["./consult-visit-examination.component.css"]
})
export class ConsultVisitExaminationComponent implements OnInit {
  consultation$: Observable<Consultation>;
  examinations$: Observable<any[]>;
  moment = moment;
  empty = true;

  constructor(private route: ActivatedRoute,
              private consultService: ConsultationService,
              private additionalExaminationResultService: AdditionalExaminationResultService
  ) { }

  ngOnInit(): void {
    this.consultation$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.consultService.Get(params.get("id"))
      )
    );

    this.consultation$.subscribe(data => {
      this.examinations$ = this.additionalExaminationResultService.GetAll(null, new HttpParams().set("patientId", data.patient.id))
        .pipe(
          map(items => {
            if(items.length > 0){
              this.empty = false;
            }            
            return this.groupBy(items, item => item.additionalExaminationTypeId);
          })
        );
    });
  }

  groupBy(list, keyGetter): any[] {
    let grouped = [];
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = grouped[key];
      if (!collection) {
        grouped[key] = [item];
      } else {
        collection.push(item);
      }
    });

    grouped = grouped.filter(el => {
      return el != null;
    });
    return grouped;
  }
}
