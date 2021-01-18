import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {BaseEntity, TableAction, TableHeader} from "src/app/modules/core/core.module";
import { ExaminationTypeService } from "../../services/examination-type.service";


@Component({
  selector: "app-examination-overview",
  templateUrl: "./examination-overview.component.html",
  styleUrls: ["./examination-overview.component.css"]
})
export class ExaminationOverviewComponent {

  private examinationEmitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: TableHeader[] = [
    { key: "consultation", text: "Consult" },
    { key: "patient", text: "Patiënt" },
    { key: "value", text: "Waarde" }
  ];

  actionsArray: TableAction[] = [
    {
      id: "prescription-edit",
      name: "Aanpassen",
      classes: ["btn", "btn-warning"],
      icon: `pencil-alt`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/examinations/${entity.id}/edit`]);
      },
    },
    {
      id: "prescription-delete",
      name: "Delete",
      classes: ["btn", "btn-danger"],
      icon: `trash-alt`,
      action: (entity: BaseEntity) => {
        this.examinationEmitter.next(entity);
      },
    },
  ];

  constructor(public examinationService: ExaminationTypeService, public router: Router) {
    this.deleteEntity = new Observable(e => this.examinationEmitter = e);
  }
}
