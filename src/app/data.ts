import { IBuilding, ICost, IResource, IUserBuilding, IUserResource } from './interfaces';

import * as moment from 'moment';

const now = moment();

export const user = {
  id: 1,
  name: 'Passinho',
};

export const userResources: IUserResource[] = [
  {
    userId: 1,
    resourceId: 1,
    nbrOfAtDate: 1000,
    regen: 2,
    date: now,
  },
  {
    userId: 1,
    resourceId: 2,
    nbrOfAtDate: 250,
    regen: 1,
    date: now,
  },
];

export const userBuildings: IUserBuilding[] = [
  {
    userId: 1,
    buildingId: 1,
    level: 1,
  },
  {
    userId: 1,
    buildingId: 2,
    level: 1,
  },
];

export const resources: IResource[] = [
  {
    id: 1,
    name: 'Minerai',
  },
  {
    id: 2,
    name: 'Gaz',
  },
];

export const buildings: IBuilding[] = [
  {
    id: 1,
    name: 'Mine',
  },
  {
    id: 2,
    name: 'Exctracteur',
  },
];

export const costs: ICost[] = [
  {
    buildingId: 1, // Mine
    resourceId: 1, // Minerai
    baseCost: 50,
    baseRegen: 2,
  },
  {
    buildingId: 1, // Mine
    resourceId: 2, // Gaz
    baseCost: 10,
    baseRegen: null,
  },
  {
    buildingId: 2, // Exctracteur
    resourceId: 1, // Minerai
    baseCost: 125,
    baseRegen: null,
  },
  {
    buildingId: 2, // Exctracteur
    resourceId: 2, // Gaz
    baseCost: 30,
    baseRegen: 1,
  },
];
