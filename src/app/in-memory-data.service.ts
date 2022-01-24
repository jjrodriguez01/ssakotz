import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Knight } from './knight';
import { Knights } from './knights-factory/Knights';
import { KnightsFactory } from './knights-factory/KnightsFactory';
import { Chimera } from './LegendaryCosmo/Chimera';
import { LegendaryCosmo } from './LegendaryCosmo/LegendaryCosmo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const knights = [
      //KnightsFactory.create(Knights.HYOGADIVINO),
      KnightsFactory.create(Knights.THANATOS),
      //KnightsFactory.create(Knights.AFRODITA),
      //KnightsFactory.create(Knights.SAGA),
      //KnightsFactory.create(Knights.KANON),
      //KnightsFactory.create(Knights.RADAMANTIS),
      //KnightsFactory.create(Knights.SHURA)
    ];

    const cosmos = [
      new Chimera()
    ];

    return {knights,cosmos}
  }

  /*
  *Overrides the genId method to ensure that a hero or cosmo always has an id
  *By default id will be 11 if the array is empty
  */
  genId<T extends Knight | LegendaryCosmo>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

  constructor() { }
}
