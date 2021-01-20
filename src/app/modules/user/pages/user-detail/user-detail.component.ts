import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import {TableHeader, TableAction, BaseEntity, Gender} from "../../../core/core.module";
import { ConsultationService } from "../../../consultation/services/consultation.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
import * as moment from "moment";
import { HttpParams } from "@angular/common/http";
import { Patient } from "../../../patient/models/patient.model";


@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {

  public moment = moment;
  public userEmitter;
  public deleteEntity: Observable<BaseEntity>;
  user: User;
  consultationParams: HttpParams;

  tableHeaders: TableHeader[] = [
    {
      key: "date",
      text: "Datum",
      transform: (date: string) => {
        return moment(date).format("LLL");
      }
    },
    {
      key: "doctor",
      text: "Arts",
      transform: (d: User) => {
        return d?.name || "-";
      }
    },
    {
      key: "patient",
      text: "Patiënt",
      transform: (p: Patient) => {
        return p?.name || "-";
      }
    },
  ];

  tableActions: TableAction[] = [
    {
      id: "consult-detail",
      name: "Detail",
      classes: ["btn", "btn-primary"],
      icon: `eye`,
      action: (entity: BaseEntity) => {
        this.router.navigate([`/consultation/${entity.id}`]);
      }
    },
  ];

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    public sanitizer: DomSanitizer,
    private router: Router,
    public consultationService: ConsultationService
  )
  {
    this.deleteEntity = new Observable(e => this.userEmitter = e);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.retrieveUserData(params.get("id"));
    });
  }

  public async delete(): Promise<void> {

    await this.userService.Delete(this.user.id).toPromise();
    await this.router.navigate(["doctors"]);
  }

  get map(): string {
    return `https://www.google.com/maps/embed/v1/place?key=${ environment.googleKey }&q=${this.addressString}`;
  }

  get addressString(): string {
    if (this.user?.id == null) {
      return null;
    }

    return `${this.user.street} ${this.user.houseNumber}${this.user.houseNumberAddon},${this.user.city},${this.user.country}`;
  }

  public get age(): number {
    // @TODO: !!! ACTUAL RELIABLE AGE CALCULATION !!!
    return Math.floor((((new Date().valueOf() - new Date(this.user.dob).valueOf()) / (24 * 60 * 60 * 1000)) / 365.242));
  }

  public get dob(): Date {
    return new Date(this.user.dob);
  }

  public get gender(): string {
    switch (this.user.gender) {
      case Gender.MALE:
        return "Man";

      case Gender.FEMALE:
        return "Vrouw";

      default:
        return "Overige";
    }
  }

  private retrieveUserData(id: string): void {
    this.userService.Get(id).toPromise()
      .then(async (u: User) => {
        if (u == null || u.id == null) {
          // @TODO: Global modal service, ToastService?
          console.error("User could not be found...");
          try {
            await this.router.navigate(["doctors"]);
          }
          catch (e) {
            // @TODO: Global modal/Toast??
          }
          return;
        }

        this.user = u;
        this.consultationParams = new HttpParams().set("userId", this.user.id);
      })
      .catch(async (e) => {
        console.error("API could not be reached...");
        // @TODO: Global modal service, ToastService?
        await this.router.navigate(["doctors"]);
        try {
          await this.router.navigate(["doctors"]);
        }
        catch (ex) {
          // @TODO: Global modal/Toast??
        }
        return;
      });
  }

  async onDeleteComplete(success): Promise<void> {
    await this.router.navigate(["doctors"]);
  }
}
