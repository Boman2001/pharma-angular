import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Activity } from "../../models/activity.model";
import { BaseEntity } from "../../../core/models/base-entity.model";
import { User } from "../../../user/models/user.model";
import { UserService } from "../../../user/services/user.service";

@Component({
  selector: "app-activity-detail-modal",
  templateUrl: "./activity-detail-modal.component.html",
  styleUrls: ["./activity-detail-modal.component.css"]
})

export class ActivityDetailModalComponent implements OnInit {
  @Input() public detailEntity: Observable<BaseEntity>;
  @ViewChild("modalContent") public content: ElementRef;

  private activity: Activity;
  private editor: User;
  private modal;

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.detailEntity?.subscribe(async (e: BaseEntity) => {
      this.activity = e as unknown as Activity;
      // @ts-ignore
      this.editor = await this.userService.Get(e.createdBy).toPromise();
      this.open();
    });
  }

  get editorAge(): number {
    // @TODO: !!! ACTUAL RELIABLE AGE CALCULATION !!!
    return Math.floor((((new Date().valueOf() - new Date(this.editor.dob).valueOf()) / (24 * 60 * 60 * 1000)) / 365.242));  }

  get editorGender(): string {
    switch (this.editor.gender) {
      case 0:
        return "Man";

      case 1:
        return "Vrouw";

      default:
        return "Overig";
    }
  }

  get activityProperties(): string {
    return JSON.stringify(JSON.parse(this.activity.properties), null, 2);
  }

  get activityType(): string {
    const parts = this.activity.subjectType.split(".");
    return parts[parts.length - 1];
  }

  public open(): void {
    this.modal = this.modalService.open(this.content, { ariaLabelledBy: "modal-confirm-delete" });
  }

  public close(): void {
    this.modal.close();
  }
}
