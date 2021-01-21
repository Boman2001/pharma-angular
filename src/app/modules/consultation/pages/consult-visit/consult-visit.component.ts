import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

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

    this.id$ = this.route.paramMap.pipe(
      map((params) => {
        return params.get("id");
      })
    );
  }

  toggleSteps(): void {
    this.steps = !this.steps;
  }
}
