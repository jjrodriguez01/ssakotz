import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Knight } from './knight';
import { Knights } from './knights-factory/Knights';
import { KnightsFactory } from './knights-factory/KnightsFactory';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const knights = [
      KnightsFactory.create(Knights.HYOGADIVINO),
      KnightsFactory.create(Knights.THANATOS),
      KnightsFactory.create(Knights.AFRODITA),
      KnightsFactory.create(Knights.SAGA),
      KnightsFactory.create(Knights.KANON),
      KnightsFactory.create(Knights.RADAMANTIS),
      KnightsFactory.create(Knights.SHURA)
    ];
    return {knights}
  }

  genId(knights: Knight[]): number {
    return knights.length > 0 ? Math.max(...knights.map(knights => knights.id)) + 1 : 11;
  }

  constructor() { }
}
