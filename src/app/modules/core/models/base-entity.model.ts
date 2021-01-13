import { User } from "../../user/user.module";


export class BaseEntity {
  Id: string;

  CreatedAt: Date;
  CreatedBy: User;

  UpdatedAt: Date;
  UpdatedBy: User;

  DeletedAt: Date;
  DeletedBy: User;
}
