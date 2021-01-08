import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-consult-create",
  templateUrl: "./consult-create.component.html",
  styleUrls: ["./consult-create.component.css"]
})
export class ConsultCreateComponent implements OnInit {
  form: FormGroup;
  validators = [
    Validators.required
  ];
  modal;

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl("", this.validators),
      patient: new FormControl("", this.validators),
      doctor: new FormControl("", this.validators),
      comment: new FormControl("", this.validators)
    });
  }

  open(content): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: "modal-create-consult"});
  }

  submit(): void{
    this.modal.close();
  }
}
