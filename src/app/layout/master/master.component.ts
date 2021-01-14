import { Component } from "@angular/core";
import { AuthService } from "../../modules/auth/auth.module";
import { Router } from "@angular/router";


@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.css"]
})
export class MasterComponent {
  navBar = false;
  profile = false;

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {

    this.authService.Logout();
    this.router.navigate(["/auth/login"]);
  }

  profileClick(): void {
    this.profile = !this.profile;
  }

  toggleNavBar(): void{
    this.navBar = !this.navBar;
  }
}
