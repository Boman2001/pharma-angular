import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Episode } from "../models/episode.model";


@Injectable({
  providedIn: "root"
})
export class EpisodeService extends GenericHttpService<Episode> {

  constructor(protected http: HttpClient) {
    super("episode", http);
  }
}
