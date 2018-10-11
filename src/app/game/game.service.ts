import { Injectable } from '@angular/core';

import { Moment } from 'moment';

import { userBuildings, buildings, costs, resources, userResources } from '../data';
import { IBuildingF, IResourceF } from './game.component';
import { getCost } from '../hepler';

@Injectable()
export class GameService {
  public getBuildingsDetails(): IBuildingF[] {
    return buildings
    .filter(b => userBuildings.map(u => u.buildingId).includes(b.id))
    .map((b) => {
      const buildingLevel = userBuildings.find(u => u.buildingId === b.id).level;

      return {
        id: b.id,
        name: b.name,
        level: buildingLevel,
        costs: costs
        .filter(c => c.buildingId === b.id)
        .map((c) => {
          return {
            resource: resources.find(r => r.id === c.resourceId),
            value: getCost(c.baseCost, buildingLevel),
          };
        }),
      };
    });
  }

  public getResourcesDetails(): IResourceF[] {
    return resources
    .filter(r => userResources.map(u => u.resourceId).includes(r.id))
    .map((r) => {
      const userR = userResources.find(u => u.resourceId === r.id);

      return {
        id: r.id,
        name: r.name,
        nbrOf: userR.nbrOf,
        regen: userR.regen,
      };
    });
  }
}
