import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserJournalService } from "./services/user-journal.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserJournalService
  ]
})
export class UserJournalModule { }

// Models
export * from "./models/user-journal.model";

// Services
export * from "./services/user-journal.service";
