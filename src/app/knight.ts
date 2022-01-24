import { BasicAttributes } from "./BasicAttributes";
import { DamageType } from "./DamageType";
import { BattleAttributes } from "./knights/BattleAttributes";
import { KnightSkill } from "./KnightSkill";
import { KnightTypeEnum } from "./KnightType";

export interface Knight {
    id: number
    name: string
    image: string
    type: KnightTypeEnum
    level: number
    damageType: DamageType 
    basicAttributes: BasicAttributes
    battleAttributes: BattleAttributes
    skills : KnightSkill[]
    getSkill(id:number, level:number): KnightSkill
  }