import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TableHeader, TableAction, BaseEntity } from "../../../core/core.module";
import { ConsultationService } from "../../../consultation/services/consultation.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {

  public userEmitter;
  public deleteEntity: Observable<BaseEntity>;
  user: User;

  tableHeaders: TableHeader[] = [];
  tableActions: TableAction[] = [];

  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
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
