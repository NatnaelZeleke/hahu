export interface IProfile {
  id?: number;
  age?: number;
  phone?: string;
  curentProfilePicContentType?: string;
  curentProfilePic?: any;
  location?: any;
  bio?: any;
  userLogin?: string;
  userId?: number;
}

export class Profile implements IProfile {
  constructor(
    public id?: number,
    public age?: number,
    public phone?: string,
    public curentProfilePicContentType?: string,
    public curentProfilePic?: any,
    public location?: any,
    public bio?: any,
    public userLogin?: string,
    public userId?: number
  ) {}
}
