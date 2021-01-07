import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatientRoutingModule } from "./patient-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import * as fromComponents from "../patient";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgbDatepickerModule,
    FormsModule
  ]
})
export class PatientsModule { }
