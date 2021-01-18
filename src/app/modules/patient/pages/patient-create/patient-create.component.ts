import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-patient-create",
  templateUrl: "./patient-create.component.html",
  styleUrls: ["./patient-create.component.css"]
})
export class PatientCreateComponent {

  constructor(private router: Router) { }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    if (saveResult)
    {
      await this.router.navigate(["patients"]);
      return;
    }

    // @TODO: GlobalModalService or ToastService
  }
}
