import { Injectable } from '@angular/core';
import { DamageType } from './DamageType';
import { Knight } from './knight';

@Injectable({
  providedIn: 'root'
})
export class DamageCalculationService {

  constructor() { }

  damage(knight: Knight, dmgMultiplier: number,finalFactor: number): number{
    let atk = 0
    let defPerf = 0
    let dmg = 0
    if(knight.damageType === DamageType.COSMIC){
      atk = knight.basicAttributes.cosmicAtk
      defPerf = knight.battleAttributes.cosmicDEFPerf
      dmg = knight.battleAttributes.cosmicDMG
    }else{
      atk = knight.basicAttributes.physicalAtk
      defPerf = knight.battleAttributes.physicalDEFPerf
      dmg = knight.battleAttributes.physicalCritEffect
    }
    finalFactor == 0? finalFactor = 1 : finalFactor = finalFactor
    let defFactor = (400+10*knight.level)/((knight.battleAttributes.defenderDef-defPerf)+400+10*knight.level)
    let resFactor = 1/1+knight.battleAttributes.defenderResDef
    let damage = atk*(dmgMultiplier/100)*dmg*resFactor*defFactor*finalFactor
    return Math.floor(damage)
  }

}
