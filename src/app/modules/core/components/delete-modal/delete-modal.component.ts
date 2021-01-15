import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from "@angular/core";
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
  @Output() deleteComplete = new EventEmitter<boolean>();

  private deleteId;
  private modal;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.deleteEntity?.subscribe((e: BaseEntity) => {
      this.deleteId = e.id;
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

    let result = false;
    try {
      result = await this.service.Delete(this.deleteId).toPromise();
      this.deleteId = null;
      this.close();
    }
    catch (e) {
      // @TODO: GlobalModalService? Toast Service??
    }

    this.deleteComplete.emit(result);
  }
}
