import { TestBed } from '@angular/core/testing';

import { DamageCalculationService } from './damage-calculation.service';
import { DamageType } from './DamageType';
import { Kanon } from './knights-factory/knights/Kanon';

fdescribe('DamageCalculationService', () => {
  let service: DamageCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get damage', () => {
    let knight = new Kanon()
    knight.level = 80
    knight.basicAttributes.cosmicAtk = 12475
    knight.battleAttributes.cosmicDMG = 1.32
    knight.battleAttributes.cosmicDEFPerf = 0
    knight.battleAttributes.defenderDef = 13
    knight.battleAttributes.defenderResDef = 0
    knight.damageType = DamageType.COSMIC
    let dmg = service.damage(knight,200,0)
    console.log(`result: ${dmg}`)
    expect(dmg).toEqual(32581)
  });
});
