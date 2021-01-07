import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as fromComponents from ".";

const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      component: fromComponents.UserOverviewComponent,
      data: {
        title: "doctors",
        breadcrumb: [
          {
            label: "Doktoren",
            url: "/doctors"
          }
        ]
      }
    },
    {
      path: "new",
      pathMatch: "full",
      component: fromComponents.UserCreateComponent,
      data: {
        title: "doctors",
        breadcrumb: [
          {
            label: "Doktoren",
            url: "/doctors"
          },
          {
            label: "Nieuw",
            url: "/doctors/new"
          }
        ]
      }
    },
      {
      path: ":id/edit",
      pathMatch: "full",
      component: fromComponents.UserEditComponent,
      data: {
        title: "doctors",
        breadcrumb: [
          {
            label: "Doktoren",
            url: "/doctors"
          },
        ]
      }
    },
    {
      path: ":id",
      pathMatch: "full",
      component: fromComponents.UserDetailComponent,
      data: {
        title: "doctors",
        breadcrumb: [
          {
            label: "Doktoren",
            url: "/doctors"
          },
        ]
      }
    },
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }