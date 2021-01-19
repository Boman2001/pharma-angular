import {User} from "../../user/models/user.model";

export class TwoFactorResponse {
  token: string;
  user: User;
}
