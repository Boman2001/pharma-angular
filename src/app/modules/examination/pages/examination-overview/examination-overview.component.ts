import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseEntity } from "src/app/modules/core/core.module";
import { ExaminationTypeService } from "../../services/examination-type.service";

@Component({
  selector: "app-examination-overview",
  templateUrl: "./examination-overview.component.html",
  styleUrls: ["./examination-overview.component.css"]
})
export class ExaminationOverviewComponent {

  private emitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: string[] = [
    "Consultation",
    "Patient",
    "Value"
  ]

  actionsArray: { id: string, class: string, icon: string, action: (entity: BaseEntity) => void }[] = 
  [
    {
      id: "prescription-detail",
      class: "btn btn-primary",
      icon: '<i class="fas fa-eye"></i>',
      action: (entity: BaseEntity) => {
        this.router.navigate(['/' + entity.Id])
      }
    },
    {
      id: "prescription-delete",
      class: "btn btn-danger",
      icon: '<i class="fas fa-trash-alt"></i>',
      action: (entity: BaseEntity) => {
        this.emitter.next(entity);
      }
    }
  ];

  constructor(public examinationService: ExaminationTypeService, public router: Router) {
    this.deleteEntity = new Observable(e => this.emitter = e);
  }
}
