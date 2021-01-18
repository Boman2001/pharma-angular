import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-examination-type-create",
  templateUrl: "./examination-type-create.component.html",
  styleUrls: ["./examination-type-create.component.css"]
})
export class ExaminationTypeCreateComponent {

  constructor(private router: Router) { }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    if (saveResult)
    {
      await this.router.navigate(["examinations"]);
      return;
    }

    // @TODO: GlobalModalService or ToastService
  }
}
