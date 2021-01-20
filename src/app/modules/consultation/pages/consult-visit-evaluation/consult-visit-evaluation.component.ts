import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Consultation } from "../../models/consultation.model";
import { ConsultationService } from "../../services/consultation.service";
import { ActivatedRoute } from "@angular/router";
import { UserJournalService } from "../../../user-journal/services/user-journal.service";
import { UserJournal } from "../../../user-journal/models/user-journal.model";
import { UserJournalType } from "../../enums/UserJournalType.enum";
import { TableHeader } from "../../../core/lib/TableHeader";
import { TableAction } from "../../../core/lib/TableAction";
import { HttpParams } from "@angular/common/http";
import * as moment from "moment";


@Component({
  selector: "app-consult-visit-evaluation",
  templateUrl: "./consult-visit-evaluation.component.html",
  styleUrls: ["./consult-visit-evaluation.component.css"]
})
export class ConsultVisitEvaluationComponent implements OnInit {

  @ViewChild("userJournalTable") private userJournalTable;
  private consultation: Consultation;
  form: FormGroup;

  public filterParams: HttpParams;

  public tableHeaders: TableHeader[] = [
    {
      key: "createdAt",
      text: "Datum",
      transform: (d: string) => {
        return moment(d).format("LLL");
      }
    },
    {
      key: "property",
      text: "Type",
      transform: (p: number) => {
        return UserJournalType[p];
      }
    },
    {
      key: "description",
      text: "Beschrijving"
    }
  ];

  public tableActions: TableAction[] = [];

  constructor(
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    public userJournalService: UserJournalService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {

    this.form = this.fb.group({
      property: new FormControl("", [ Validators.required ]),
      description: new FormControl("", [ Validators.required ])
    });

    this.consultation = await new Promise(((resolve, reject) => {

      this.route.paramMap.subscribe((params) => {

        this.consultationService.Get(params.get("id")).subscribe((c: Consultation) => {

          resolve(c);
        });
      });
    }));

    this.filterParams = new HttpParams()
      .set("consultationId", this.consultation.id);
  }

  get userJournal(): UserJournal {

    return this.form.getRawValue();
  }

  set userJournal(value: UserJournal) {

    this.form.patchValue(value);
  }

  async save(): Promise<void> {

    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i]?.markAsTouched();
      }
    }

    if (!this.form.valid)
    {
      // @TODO: Toast? GlobalModal??
      return;
    }

    try {

      await this.userJournalService.Add({
          ...this.userJournal,
          consultationId: this.consultation?.id,
          patientId: this.consultation.patient?.id
        }
      )
      .toPromise();
      // @TODO: Toast? GlobalModal??
      await this.userJournalTable.tableService.refresh();
      this.userJournal = {
        consultationId: null,
        description: null,
        patientId: null,
        property: null
      };

      for (const i in this.form.controls) {
        if (this.form.controls.hasOwnProperty(i)) {
          this.form.controls[i]?.markAsUntouched();
        }
      }
    }
    catch (e) {
      console.error(e);
      // @TODO: Toast? GlobalModal??
    }
  }
}
