import { SkillLevel } from './SkillLevel';
import {SkillType} from './SkillType'

export interface KnightSkill{
    id: number,
    name: string
    type: SkillType
    description: string
    damageResult: string
    levels: SkillLevel[]
}