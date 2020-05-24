import {IImage} from './image.model';

export interface IAlbum {
  id?: number;
  name?: string;
  images?: IImage[];
  userLogin?: string;
  userId?: number;
}

export class Album implements IAlbum {
  constructor(public id?: number, public name?: string, public images?: IImage[], public userLogin?: string, public userId?: number) {}
}
