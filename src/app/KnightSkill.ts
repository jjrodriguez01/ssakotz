import { SkillLevel } from './SkillLevel';
import {SkillType} from './SkillType'

export interface KnightSkill{
    name: string
    type: SkillType
    description: string
    levels: SkillLevel[]
}