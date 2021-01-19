import {Component, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {BaseEntity} from "../../core/models/base-entity.model";
import {TableHeader} from "../../core/lib/TableHeader";
import {TableAction} from "../../core/lib/TableAction";
import {Router} from "@angular/router";
import * as moment from "moment";
import { ActivityService } from "../services/activity.service";


@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.css"]
})
export class ActivityComponent {

  private detailEmitter;
  public detailEntity: Observable<BaseEntity>;

  headerArray: TableHeader[] = [
    { key: "description", text: "Beschrijving" },
    {
      key: "subjectType",
      text: "Type",
      transform: (t: string) => {
        const parts = t.split(".");
        return parts[parts.length - 1];
      }
    },
    {
      key: "createdAt",
      text: "Gemaakt Op",
      transform: (e: string) => {
        return moment(e).format("LLL");
      }
    },
  ];
  actionsArray: TableAction[] = [
    {
      id: "activity-detail",
      name: "Detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.detailEmitter.next(entity);
      }
    }
  ];

  @ViewChild("activitiesTable") table;

  constructor(public activityService: ActivityService, public router: Router) {
    this.detailEntity = new Observable(e => this.detailEmitter = e);
  }
}
