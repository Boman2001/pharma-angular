import {Component, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { ExaminationTypeService } from "../../services/examination-type.service";


@Component({
  selector: "app-examination-type-overview",
  templateUrl: "./examination-type-overview.component.html",
  styleUrls: ["./examination-type-overview.component.css"]
})
export class ExaminationTypeOverviewComponent {

  private examinationEmitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: TableHeader[] = [
    { key: "name", text: "Naam" },
    { key: "unit", text: "Eenheid" },
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

  @ViewChild("examinationTypeTable") table;

  constructor(public examinationTypeService: ExaminationTypeService, public router: Router) {
    this.deleteEntity = new Observable(e => this.examinationEmitter = e);
  }

  onDeleteComplete(success): void {
    // @TODO: The API doesn't return true;
    // if (success) {
    //   this.table.tableService.refresh();
    // }
    this.table.tableService.refresh();
  }
}
