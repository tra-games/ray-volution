import { IBuildingF, IResourceF } from './game/game.component';

export function getCost(baseCost: number, level: number): number {
  return baseCost * level;
}

export function getRegen(baseRegen: number, level: number): number {
  return baseRegen * level;
}

export function hasEnough(building: IBuildingF, resources: IResourceF[]): boolean {
  for (const cost of building.costs) {
    if (cost.value > resources.find(r => r.id === cost.resource.id).nbrOf) {
      return false;
    }
  }

  return true;
}
