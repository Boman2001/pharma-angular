import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ExaminationType } from "../../models/examination-type.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ExaminationTypeService } from "../../services/examination-type.service";


@Component({
  selector: "app-examination-type-edit",
  templateUrl: "./examination-type-edit.component.html",
  styleUrls: ["./examination-type-edit.component.css"]
})
export class ExaminationTypeEditComponent {

  public examinationType: Observable<ExaminationType>;
  public deleteEntity: Observable<ExaminationType>;

  public deleteExaminationTypeEmitter;
  public examinationTypeEmitter;

  constructor(public examinationTypeService: ExaminationTypeService, private route: ActivatedRoute, private router: Router) {
    this.deleteEntity = new Observable(e => this.deleteExaminationTypeEmitter = e);

    this.examinationType = new Observable<ExaminationType>(e => this.examinationTypeEmitter = e);
    this.route.paramMap.subscribe(params => {
      this.examinationTypeService.Get(params.get("id")).toPromise()
        .then(async (et: ExaminationType) => {
          if (et == null || et.id == null) {
            // @TODO: Global modal service, ToastService?
            console.error("ExaminationType could not be found...");
            await router.navigate(["examinations"]);
            return;
          }

          this.examinationTypeEmitter.next(et);
        })
        .catch(async (e) => {
          console.error("API could not be reached...");
          // @TODO: Global modal service, ToastService?
          await router.navigate(["examinations"]);
          return;
        });
    });
  }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    // @TODO: GlobalModalService or ToastService
    if (saveResult)
    {
      await this.router.navigate(["examinations"]);
      return;
    }
  }

  async onDeleteComplete(success): Promise<void> {
    await this.router.navigate(["examinations"]);
  }
}
