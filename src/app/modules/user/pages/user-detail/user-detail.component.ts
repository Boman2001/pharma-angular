import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.retrieveUserData(params.id);
    });
  }

  private retrieveUserData(id: number): void {
    this.userService.Get(this.user.Id)
      .subscribe((res: User) => {
        this.user = res;
      });
  }
}
