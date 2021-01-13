import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"]
})
export class UserCreateComponent {

  constructor(private router: Router) { }

  async onSaveComplete(saveResult: boolean): Promise<void> {
    if (saveResult)
    {
      await this.router.navigate(["users"]);
      return;
    }

    // @TODO: GlobalModalService or ToastService
  }
}
