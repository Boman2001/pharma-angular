import { Component, OnInit } from "@angular/core";
import {Consultation} from "../../models/consultation.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: "app-consult-visit",
  templateUrl: "./consult-visit.component.html",
  styleUrls: ["./consult-visit.component.css"]
})
export class ConsultVisitComponent implements OnInit {
  id$: Observable<any>;
  steps = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      params.get("id")
      )
    );
  }

  toggleSteps(): void{
    this.steps = !this.steps;
}

}
