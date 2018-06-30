export class Quote {
  constructor(
    public email: string,
    public description: string,
    public createdAt?: string,
    public updatedAt?: string,
    public status?: string,
    public _id?: string,
    public __v?: number
  ) {}
}