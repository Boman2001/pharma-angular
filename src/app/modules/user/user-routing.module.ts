// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { UserOverviewComponent } from "./pages/user-overview/user-overview.component";
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: UserOverviewComponent,
    data: {
      title: "Doktoren",
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
    component: UserCreateComponent,
    data: {
      title: "Dokter Aanmaken",
      breadcrumb: [
        {
          label: "Doktoren",
          url: "/doctors"
        },
        {
          label: "Dokter Aanmaken",
          url: "/doctors/new"
        }
      ]
    }
  },
  {
    path: ":id",
    pathMatch: "full",
    component: UserDetailComponent,
    data: {
      title: "Dokter",
      breadcrumb: [
        {
          label: "Doktoren",
          url: "/doctors"
        },
        {
          label: "Dokter",
          url: "/doctors/:id"
        },
      ]
    }
  },
  {
    path: ":id/edit",
    pathMatch: "full",
    component: UserEditComponent,
    data: {
      title: "Dokter Bewerken",
      breadcrumb: [
        {
          label: "Doktoren",
          url: "/doctors"
        },
        {
          label: "Dokter Bewerken",
          url: "/doctors/:id/edit"
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
