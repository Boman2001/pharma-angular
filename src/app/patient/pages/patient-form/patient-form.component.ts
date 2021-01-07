import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-patient-form",
  templateUrl: "./patient-form.component.html",
  styleUrls: ["./patient-form.component.css"]
})
export class PatientFormComponent implements OnInit {

  @Input() buttonName: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
