import { Moment } from 'moment';

export interface IUser {
  id: 1;
  resources: IUserResource[];
  buildings: IUserBuilding[];
}

export interface IUserResource {
  userId: number;
  resourceId: number;
  nbrOfAtDate: number;
  date: Moment;
  regen: number;
}

export interface IUserBuilding {
  userId: number;
  buildingId: number;
  level: number;
}

export interface IResource {
  id: number;
  name: string;
}

export interface IBuilding {
  id: number;
  name: string;
}

export interface ICost {
  buildingId: number;
  resourceId: number;
  baseCost: number;
  baseRegen: number;
}
