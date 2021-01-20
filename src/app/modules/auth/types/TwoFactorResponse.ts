import { User } from "../../user/models/user.model";


export type TwoFactorResponse = { user: User, token: string };
