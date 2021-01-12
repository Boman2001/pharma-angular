import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Episode } from "../models/episode.model";


@Injectable({
  providedIn: "root"
})
export class EpisodeService extends GenericHttpService<Episode> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("Episodes", http, storage);
  }
}
