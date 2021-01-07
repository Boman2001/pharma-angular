import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as fromComponents from ".";
import { ConsultModule } from "../consult/consult.module";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultModule,
  ]
})
export class UserModule { }
