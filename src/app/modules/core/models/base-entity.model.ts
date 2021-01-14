import { User } from "../../user/user.module";


export class BaseEntity {
  id?: string;

  createdAt?: Date;
  createdBy?: User;

  updatedAt?: Date;
  updatedBy?: User;

  deletedAt?: Date;
  deletedBy?: User;
}
