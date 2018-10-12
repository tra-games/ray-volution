import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Moment } from 'moment';

import { IResource } from '../interfaces';
import { GameService } from './game.service';
import { hasEnough } from '../hepler';

export interface IBuildingF {
  id: number;
  name: string;
  level: number;
  costs: { resource: IResource, value: number, hasEnough: boolean }[];
}

export interface IResourceF {
  id: number;
  name: string;
  nbrOf: number;
  regen: number;
}

const TICKER = 1000; // en ms

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public buildings: IBuildingF[];
  public resources: IResourceF[];
  public now: Moment = moment();

  constructor(
    private _gameService: GameService,
  ) {
    this.buildings = this._gameService.getBuildingsDetails();
    this.tick();
  }

  public ngOnInit(): void {
    setInterval(() => {
      this.tick();
    }, TICKER);
  }

  public tick(): void {
    this.now = moment();
    this.resources = this._gameService.getResourcesDetails();

    this.buildings = this.buildings.map((b) => {
      return {
        ...b,
        costs: b.costs.map((c) => {
          return {
            ...c,
            hasEnough: this.resources.find(r => r.id === c.resource.id).nbrOf > c.value,
          };
        }),
      };
    });
  }

  public upgradeBuilding(building: IBuildingF): void {
    if (hasEnough(building, this.resources)) {
      this._gameService.upgradeBuilding(building);
      this.tick();
    }
  }
}
