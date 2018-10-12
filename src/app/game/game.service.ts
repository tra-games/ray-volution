import { Injectable } from '@angular/core';

import { calculateResource } from '@ray-volution/core/resources';
import * as moment from 'moment';

import { buildings, costs, resources, userBuildings, userResources } from '../data';
import { IBuildingF, IResourceF } from './game.component';
import { getCost, getRegen } from '../hepler';

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
        isUpgradable: false,
        costs: costs
        .filter(c => c.buildingId === b.id)
        .map((c) => {
          return {
            resource: resources.find(r => r.id === c.resourceId),
            value: getCost(c.baseCost, buildingLevel),
            hasEnough: false,
          };
        }),
      };
    });
  }

  public getResourcesDetails(): IResourceF[] {
    const now = moment();

    return resources
    .filter(r => userResources.map(u => u.resourceId).includes(r.id))
    .map((r) => {
      const userR = userResources.find(u => u.resourceId === r.id);

      return {
        id: r.id,
        name: r.name,
        nbrOf: calculateResource(userR.nbrOfAtDate, userR.regen, userR.date, now),
        regen: userR.regen,
      };
    });
  }

  public upgradeBuilding(buildingF: IBuildingF): void {
    const now = moment();

    const building = userBuildings.find(u => u.buildingId === buildingF.id);
    building.level += 1;

    for (const cost of buildingF.costs) {
      const resource = userResources.find(u => u.resourceId === cost.resource.id);
      resource.nbrOfAtDate = calculateResource(resource.nbrOfAtDate, resource.regen, resource.date, now);
      resource.nbrOfAtDate -= cost.value;
      resource.date = now;

      const baseRegen = costs.find(c => c.buildingId === buildingF.id && c.resourceId === cost.resource.id).baseRegen;

      if (baseRegen) {
        resource.regen = getRegen(baseRegen, building.level);
      }
    }
  }
}
