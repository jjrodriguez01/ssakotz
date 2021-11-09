import { BasicAttributes } from "./BasicAttributes";
import { BattleAttributes } from "./knights/BattleAttributes";
import { KnightSkill } from "./KnightSkill";
import { KnightTypeEnum } from "./KnightType";

export interface Knight {
    id: number
    name: string
    image: string
    type: KnightTypeEnum
    level: number
    basicAttributes: BasicAttributes
    battleAttributes: BattleAttributes
    skills : KnightSkill[]
  }