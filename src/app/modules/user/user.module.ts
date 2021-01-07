// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Services
import { UserService } from "./services/user.service";

// Components
import { UserOverviewComponent } from "./pages/user-overview/user-overview.component";
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { UserFormComponent } from "./components/user-form/user-form.component";


@NgModule({
  declarations: [
    UserOverviewComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserFormComponent
  ],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserOverviewComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserFormComponent
  ],
})
export class UserModule { }

// Models
export * from "./models/user.model";

// Services
export * from "./services/user.service";

// Components
export * from "./pages/user-overview/user-overview.component";
export * from "./pages/user-create/user-create.component";
export * from "./pages/user-detail/user-detail.component";
export * from "./pages/user-edit/user-edit.component";
export * from "./components/user-form/user-form.component";
