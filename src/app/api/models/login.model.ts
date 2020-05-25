export interface ILogin {
  username?: string;
  password?: string;
  rememberMe?: boolean;
}

export class Login implements ILogin {
  constructor(public username: string, public password: string, public rememberMe: boolean) {}
}
