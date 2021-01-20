import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ConsultationService} from "../../services/consultation.service";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Consultation} from "../../models/consultation.model";
import {Gender} from "../../../core/enums/gender.enum";
import * as moment from "moment";
import {EpisodeService} from "../../../episode/services/episode.service";
import {HttpParams} from "@angular/common/http";
import {Episode} from "../../../episode/models/episode.model";
import {PhysicalExaminationService} from "../../../examination/services/physical-examination.service";
import {PhysicalExamination} from "../../../examination/models/physical-examination.model";
import {AdditionalExaminationResultService} from "../../../examination/services/additional-examination-result.service";
import {UserJournal} from "../../../user-journal/models/user-journal.model";
import {UserJournalService} from "../../../user-journal/services/user-journal.service";
import {Prescription} from "../../../prescription/models/prescription.model";
import {PrescriptionService} from "../../../prescription/services/prescription.service";
import {Intolerance} from "../../../intolerance/models/intolerance.model";
import {IntoleranceService} from "../../../intolerance/services/intolerance.service";
import { UserJournalType } from "../../enums/UserJournalType.enum"

@Component({
  selector: "app-consult-visit-resume",
  templateUrl: "./consult-visit-resume.component.html",
  styleUrls: ["./consult-visit-resume.component.css"]
})
export class ConsultVisitResumeComponent implements OnInit {
  consultation$: Observable<Consultation>;
  currentEpisodes$: Observable<Episode[]>;
  expiredEpisodes$: Observable<Episode[]>;
  physicalExaminations$: Observable<PhysicalExamination[]>;
  additionalExaminations$: Observable<PhysicalExamination[]>;
  userJournal$: Observable<UserJournal[]>;
  prescriptions$: Observable<Prescription[]>;
  intolerances$: Observable<Intolerance[]>;
  moment = moment;
  UserJournalType = UserJournalType;

  constructor(private route: ActivatedRoute,
              private consultService: ConsultationService,
              private episodeService: EpisodeService,
              private physicalExaminationService: PhysicalExaminationService,
              private additionalExaminationResultService: AdditionalExaminationResultService,
              private userJournalService: UserJournalService,
              private prescriptionService: PrescriptionService,
              private intoleranceService: IntoleranceService) { }

  ngOnInit(): void {
    this.consultation$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.consultService.Get(params.get("id"))
      )
    );

    this.consultation$.subscribe(data => {
      const currentEpisodeQueryParams: HttpParams = new HttpParams()
        .set("patientId", data.patient.id)
        .set("consultDate", data.date);

      const expiredEpisodeQueryParams: HttpParams = new HttpParams()
        .set("patientId", data.patient.id)
        .set("consultDate", data.date)
        .set("expired", "true");

      this.currentEpisodes$ = this.episodeService.GetAll(null, currentEpisodeQueryParams);
      this.expiredEpisodes$ = this.episodeService.GetAll(null, expiredEpisodeQueryParams);
      this.physicalExaminations$ = this.physicalExaminationService.GetAll(null, new HttpParams().set("patientId", data.patient.id))
        .pipe(
          map(items => {
            return this.groupBy(items, item => item.examinationTypeId);
          })
        );

      this.additionalExaminations$ = this.additionalExaminationResultService.GetAll(null, new HttpParams().set("patientId", data.patient.id))
        .pipe(
          map(items => {
            return this.groupBy(items, item => item.additionalExaminationTypeId);
          })
        );

      this.userJournal$ = this.userJournalService.GetAll(null, new HttpParams().set("patientId", data.patient.id))
        .pipe(
          map(items => {
            return this.groupBy(items, item => item.consultationId);
          })
        );

      this.prescriptions$ = this.prescriptionService.GetAll(null, new HttpParams().set("patientId", data.patient.id));
      this.intolerances$ = this.intoleranceService.GetAll(null, new HttpParams().set("patientId", data.patient.id));
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
