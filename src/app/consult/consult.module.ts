import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import {ConsultRoutingModule} from "./consult-routing.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { ConsultCreateComponent } from "./pages/consult-create/consult-create.component";

@NgModule({
  declarations: [ConsultOverviewComponent, ConsultCreateComponent],
  imports: [
    CommonModule,
    ConsultRoutingModule,
    NgbDatepickerModule,
    FormsModule
  ]
})
export class ConsultModule { }
