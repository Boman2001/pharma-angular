import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.retrieveUserData(params.get("id"));
    });
  }

  private retrieveUserData(id: string): void {
    this.userService.Get(id).toPromise()
      .then(async (u: User) => {
        if (u == null || u.Id == null) {
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
        catch (e) {
          // @TODO: Global modal/Toast??
        }
        return;
      });
  }
}
