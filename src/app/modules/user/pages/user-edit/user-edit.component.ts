import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent {

  public user: Observable<User>;
  public deleteEntity: Observable<User>;

  public deleteUserEmitter;
  public userEmitter;

  constructor(public userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.deleteEntity = new Observable(e => this.deleteUserEmitter = e);

    this.user = new Observable<User>(e => this.userEmitter = e);
    this.route.paramMap.subscribe(params => {
      this.userService.Get(params.get("id")).toPromise()
      .then(async (u: User) => {
        if (u == null || u.id == null) {
          // @TODO: Global modal service, ToastService?
          console.error("User could not be found...");
          await router.navigate(["doctors"]);
          return;
        }

        this.userEmitter.next(u);
      })
      .catch(async (e) => {
        console.error("API could not be reached...");
        // @TODO: Global modal service, ToastService?
        await router.navigate(["doctors"]);
        return;
      });
    });
  }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    // @TODO: GlobalModalService or ToastService
    if (saveResult)
    {
      await this.router.navigate(["doctors"]);
      return;
    }
  }

  async onDeleteComplete(success): Promise<void> {
    await this.router.navigate(["doctors"]);
  }
}
