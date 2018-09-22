export class Auth {
  constructor(
    public _id: string,
    public email: string,
    public access_token: string,
    public refresh_token: string,
    public client: string
  ) {}
}
