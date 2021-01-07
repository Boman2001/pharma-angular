import { User } from "../../user/user.module";


export class BaseEntity {
  Id: number;

  CreatedAt: Date;
  CreatedBy: User;

  UpdatedAt: Date;
  UpdatedBy: User;

  DeletedAt: Date;
  DeletedBy: User;
}
