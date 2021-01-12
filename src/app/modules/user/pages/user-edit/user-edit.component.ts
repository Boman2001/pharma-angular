import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.user = this.userService.Get(params.get("id"));
    });
  }
}
