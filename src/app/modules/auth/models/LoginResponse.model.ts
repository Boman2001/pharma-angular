import { User } from "../../user/user.module";


export class LoginResponse {

  token: string;
  user: User;
}
