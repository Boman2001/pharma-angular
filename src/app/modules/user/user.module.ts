import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserOverviewComponent } from "./pages/user-overview/user-overview.component";
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { UserFormComponent } from "./pages/user-form/user-form.component";

@NgModule({
  declarations: [
    UserOverviewComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
