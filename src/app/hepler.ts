export function getCost(baseCost: number, level: number): number {
  return baseCost * level;
}

export function getRegen(baseRegen: number, level: number): number {
  return baseRegen * level;
}
