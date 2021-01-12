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

      this.user.subscribe((u: User) => {
        if (u == null || u.Id == null) {
          router.navigate(["doctors"]);
        }
      });
    });
  }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    if (saveResult)
    {
      await this.router.navigate(["users"]);
      return;
    }

    // @TODO: GlobalModalService or ToastService
  }
}
