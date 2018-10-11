import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Moment } from 'moment';

import { IResource } from '../interfaces';
import { GameService } from './game.service';

export interface IBuildingF {
  id: number;
  name: string;
  level: number;
  costs: { resource: IResource, value: number; }[];
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
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public buildings: IBuildingF[];
  public resources: IResourceF[];
  public now: Moment = moment();

  constructor(
    private _gameService: GameService,
  ) {
    this.buildings = this._gameService.getBuildingsDetails();
    this.resources = this._gameService.getResourcesDetails();
  }

  public ngOnInit(): void {
    setInterval(() => {
      this.now = moment();

      this.resources = this.resources.map((r) => {
        return {
          ...r,
          nbrOf: r.nbrOf + (r.regen * TICKER / 1000),
        };
      })
    }, TICKER);
  }

  public upgradeBuilding(buildingId: number): void {
    
  }
}
