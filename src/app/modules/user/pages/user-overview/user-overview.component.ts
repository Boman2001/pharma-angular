import {Component, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseEntity, TableAction, TableHeader } from "src/app/modules/core/core.module";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"]
})
export class UserOverviewComponent {

  private userEmitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: TableHeader[] = [
    { key: "name", text: "Naam" },
    { key: "email", text: "Email" },
    {
      key: "dob",
      text: "Geboortedatum",
      transform: (e: string) => {
        return new Date(e).toDateString();
      }
    },
    {
      key: "gender",
      text: "Geslacht",
      transform: (e: number) => {
        switch (e) {
          case 0:
            return "Man";

          case 1:
            return "Vrouw";

          default:
            return "Overig";
        }
      }
    },
    { key: "phoneNumber", text: "Telefoonnummer" },
  ];
  actionsArray: TableAction[] = [
    {
      id: "user-detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/doctors/${entity.id}`]);
      }
    },
    {
      id: "user-edit",
      classes: ["btn", "btn-warning"],
      icon: `pencil-alt`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/doctors/${entity.id}/edit`]);
      }
    },
    {
      id: "user-delete",
      classes: ["btn", "btn-danger"],
      icon: `trash-alt`,
      action: (entity: BaseEntity) => {
        this.userEmitter.next(entity);
      }
    }
  ];

  @ViewChild("userTable") table;

  constructor(public userService: UserService, public router: Router) {
    this.deleteEntity = new Observable(e => this.userEmitter = e);
  }

  onDeleteComplete(success): void {
    // @TODO: The API doesn't return true;
    // if (success) {
    //   this.table.tableService.refresh();
    // }
    this.table.tableService.refresh();
  }
}
