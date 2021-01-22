import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDate, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import { Consultation } from "../../models/consultation.model";
import { Observable } from "rxjs";
import { ConsultationService } from "../../services/consultation.service";
import { Episode, EpisodeService } from "src/app/modules/episode/episode.module";
import * as moment from "moment";
import { ICPCCode, ICPCCodeService } from "src/app/modules/icpc/icpc.module";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: "app-consult-visit-anamnesis",
  templateUrl: "./consult-visit-anamnesis.component.html",
  styleUrls: ["./consult-visit-anamnesis.component.css"]
})
export class ConsultVisitAnamnesisComponent implements OnInit {
  form: FormGroup;
  moment = moment;
  validators = [
    Validators.required
  ];
  consult$: Observable<Consultation>;
  currentConsult: Consultation;
  expiredEpisodes$: Observable<Episode[]>;
  currentEpisodes$: Observable<Episode[]>;
  icpcCodes$: Observable<ICPCCode[]>;

  constructor(private calendar: NgbCalendar,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private service: ConsultationService,
              private episodeService: EpisodeService,
              private icpcCodeService: ICPCCodeService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      startDate: new FormControl("", this.validators),
      icpcCodeId: new FormControl("0", this.validators),
      description: new FormControl("", this.validators)
    });

    this.icpcCodes$ = this.icpcCodeService.GetAll();

    this.consult$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.service.Get(params.get("id"))
      )
    );

    this.getEpisodes();
  }

  set episode(value: Episode) {
    const date = moment(value.startDate);
    this.form.patchValue({
      ...value,
      startDate: new NgbDate(
        date.year(),
        date.month() + 1,
        date.date()
      )
    });
  }

  get episode(): Episode{
    const date: NgbDateStruct = this.form.getRawValue().startDate;
    return {
      ...this.form.getRawValue(),
      startDate: moment({
        ...date,
        month: date.month - 1,
        day: date.day + 1
      })
      .toISOString(),
      icpcCodeId: parseInt(this.form.getRawValue().icpcCodeId, 10),
      consultationId: this.currentConsult.id,
      patientId: this.currentConsult.patient.id,
      priority: 1
    };
  }

  async submit(): Promise<void>{
    if (this.form.invalid){
      if (this.form.controls.startDate.invalid){
        this.form.controls.date.setErrors({incorrect: true});
      }

      if (this.form.controls.icpcCodeId.invalid){
        this.form.controls.icpcCodeId.setErrors({incorrect: true});
      }

      if (this.form.controls.description.invalid){
        this.form.controls.description.setErrors({incorrect: true});
      }
    }
    else{
      try {
        await this.episodeService.Add(this.episode).toPromise();
        this.getEpisodes();
        this.episode = {
          consultation: null,
          consultationId: 0,
          description: "",
          endDate: null,
          icpcCodeId: 0,
          patient: null,
          patientId: 0,
          priority: 0,
          startDate: moment().toISOString()
        };
      }
      catch (e) {
        // @TODO GlobalModalService / ToastService?
        console.log(e);
      }
    }
  }

  getEpisodes(): void{
    this.consult$.subscribe((c) => {
      this.currentConsult = c;

      const currentEpisodeQueryParams: HttpParams = new HttpParams()
      .set("patientId", c.patient.id)
      .set("consultDate", c.date);

      const expiredEpisodeQueryParams: HttpParams = new HttpParams()
      .set("patientId", c.patient.id)
      .set("consultDate", c.date)
      .set("expired", "true");

      this.currentEpisodes$ = this.episodeService.GetAll(null, currentEpisodeQueryParams);
      this.expiredEpisodes$ = this.episodeService.GetAll(null, expiredEpisodeQueryParams);
    });
  }

  async setEpisodeEndDate(episodeId: number): Promise<void>{
    const episode = await this.episodeService.Get(episodeId.toString()).toPromise();
    episode.endDate = moment().toISOString();

    await this.episodeService.Update(episodeId, episode).toPromise();

    this.getEpisodes();
  }
}
