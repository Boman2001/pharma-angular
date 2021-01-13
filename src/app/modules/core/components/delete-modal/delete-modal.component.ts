import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { IRepository } from "../../lib/IRepository";
import { BaseEntity } from "../../models/base-entity.model";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.css"]
})
export class DeleteModalComponent implements OnInit {
  @Input() public service: IRepository<any>;
  @Input() public deleteEntity: Observable<BaseEntity>;
  @ViewChild("modalContent") public content: ElementRef;

  private deleteId;
  private modal;

  constructor(private modalService: NgbModal) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.deleteEntity?.subscribe((e: BaseEntity) => {
      this.deleteId = e.Id;
      this.open();
    });
  }

  public open(): void {
    this.modal = this.modalService.open(this.content, { ariaLabelledBy: "modal-confirm-delete" });
  }

  public close(): void {
    this.modal.close();
  }

  public async delete(): Promise<void> {
    await this.service.Delete(this.deleteId).toPromise();
    this.deleteEntity = null;
  }
}
