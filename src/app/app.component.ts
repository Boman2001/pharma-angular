import { Component } from "@angular/core";
import { ActivationEnd, Router } from "@angular/router";
import { NgDynamicBreadcrumbService } from "ng-dynamic-breadcrumb";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "pharma-partners-front-end";

  constructor(private router: Router, private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {
    this.router.events
      .subscribe((e) => {
        if (!(e instanceof ActivationEnd)) {
          return;
        }

        const breadcrumbs = e.snapshot.routeConfig.data?.breadcrumb;

        if (breadcrumbs != null) {
          this.ngDynamicBreadcrumbService.updateBreadcrumb(e.snapshot.routeConfig.data?.breadcrumb);
        }
      });
  }
}
