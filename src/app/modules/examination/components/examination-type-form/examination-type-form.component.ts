import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ExaminationTypeService } from "../../services/examination-type.service";
import { ExaminationType } from "../../models/examination-type.model";


@Component({
  selector: "app-examination-type-form",
  templateUrl: "./examination-type-form.component.html",
  styleUrls: ["./examination-type-form.component.css"]
})
export class ExaminationTypeFormComponent implements OnInit {

  @Input() buttonName: string;
  @Input() initialExaminationType: Observable<ExaminationType>;

  @Output() saveComplete = new EventEmitter<boolean>();
  @Output() saveError = new EventEmitter<ExceptionInformation>();

  form: FormGroup;

  constructor(private examinationTypeService: ExaminationTypeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl("", []),
      name: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      unit: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
    });

    if (this.editMode) {
      this.initialExaminationType.subscribe((e: ExaminationType) => {
        this.examinationType = e;
      });
    }
  }

  get editMode(): boolean {
    return this.initialExaminationType != null;
  }

  get examinationType(): ExaminationType {
    return this.form.getRawValue();
  }

  set examinationType(value: ExaminationType) {
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

    let result;
    try {
      if (this.examinationType.id != null && this.examinationType.id !== "")
      {
        result = await this.examinationTypeService.Update(this.examinationType.id, this.examinationType).toPromise();
      }
      else
      {
        result = await this.examinationTypeService.Add(this.examinationType).toPromise();
      }
      // @TODO: Toast? GlobalModal??
      this.saveComplete.emit(result);
    }
    catch (e) {
      // @TODO: Toast? GlobalModal??
      this.saveError.emit(e);
    }

    return result;
  }
}
