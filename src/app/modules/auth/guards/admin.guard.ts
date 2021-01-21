import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { UserRoleEnum } from "../enums/UserRole.enum";


@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (
      !this.authService.user
      || this.authService.user.roles == null
      || !this.authService.user.roles.includes(UserRoleEnum.ADMIN)
    )
    {
      return this.router.parseUrl("/");
    }
    else
    {
      return true;
    }
  }
}
