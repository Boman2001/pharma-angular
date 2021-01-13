import { Component } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent {

  user: Observable<User>;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.user = this.userService.Get(params.get("id"));

      // If user is not retrieved...
      this.user.toPromise()
      .then(async (u: User) => {
        if (u == null || u.id == null) {
          // @TODO: Global modal service, ToastService?
          console.error("User could not be found...");
          await router.navigate(["doctors"]);
          return;
        }
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
}
