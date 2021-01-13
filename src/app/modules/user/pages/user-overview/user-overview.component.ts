import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BaseEntity } from "src/app/modules/core/core.module";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"]
})
export class UserOverviewComponent {

  private userEmitter;
  public deleteEntity: Observable<BaseEntity>;

  headerArray: string[] = [
    "Name",
    "Email",
    "Dob",
    "Gender",
    "PhoneNumber",
    "City",
    "Street",
    "HouseNumber",
    "HouseNumberAddon",
    "PostalCode"

  ];
  actionsArray: { id: string, class: string, icon: string, action: (entity: BaseEntity) => void }[] =
    [
      {
        id: "user-detail",
        class: "btn btn-primary",
        icon: '<i class="fas fa-eye"></i>',
        action: (entity: BaseEntity) => {
          this.router.navigate(['/' + entity.Id])
        }
      },
      {
        id: "user-edit",
        class: "btn btn-warning",
        icon: '<i class="fas fa-pencil-alt"></i>',
        action: (entity: BaseEntity) => {
          this.router.navigate(['/' + entity.Id + '/edit'])
        }
      },
      {
        id: "user-delete",
        class: "btn btn-danger",
        icon: '<i class="fas fa-trash-alt"></i>',
        action: (entity: BaseEntity) => {
          this.userEmitter.next(entity);
        }
      }
    ]

  constructor(public userService: UserService, public router: Router) {
    this.deleteEntity = new Observable(e => this.userEmitter = e);
  }
}
