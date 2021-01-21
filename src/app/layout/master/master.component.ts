import { Component, ViewChild } from "@angular/core";
import { AuthService } from "../../modules/auth/auth.module";
import { Router } from "@angular/router";
import { UserRoleEnum } from "../../modules/auth/enums/UserRole.enum";


@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.css"]
})
export class MasterComponent {

  UserRoleEnum = UserRoleEnum;
  navBar = false;
  @ViewChild("profileDropdown") profileDropdown;

  constructor(public authService: AuthService, private router: Router) {}

  get initials(): string {
    const nameParts = this.authService.user?.name?.split(" ") || [];

    return nameParts?.length ? nameParts[0].substr(0, 1) + nameParts[(nameParts.length - 1)].substr(0, 1) : "-";
  }

  logout(): void {

    this.authService.Logout();
    this.router.navigate(["/auth/login"]);
  }

  toggleNavBar(): void{
    this.navBar = !this.navBar;
  }
}
