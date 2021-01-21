import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Activity } from "../models/activity.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class ActivityService extends GenericHttpService<Activity> {
  constructor(protected http: HttpClient, protected storage: StorageService, protected authService: AuthService, protected router: Router) {
    super("Activities", http, storage, authService, router);
  }
}
