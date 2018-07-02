export class Quote {
  constructor(
    public email: string,
    public description: string,
    public comments?: Comment[],
    public createdAt?: string,
    public updatedAt?: string,
    public status?: string,
    public _id?: string,
    public __v?: number
  ) {}
}

export class Comment {
  constructor(
    public message: string,
    public admin?: boolean,
    public createdAt?: string,
    public updatedAt?: string,
    public _id?: string,
    public __v?: number
  ) {}
}