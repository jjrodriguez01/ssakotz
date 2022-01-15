import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Shura implements Knight{
    
    id= 8
    name= "Shura de Capricornio"
    image= "assets/images/shura.webp"
    type= KnightTypeEnum.S
    level= 0
    basicAttributes= new BasicAttributes()
    battleAttributes= new BattleAttributes()
    skills= [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]
    damageType = DamageType.PHYSIC

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            description: "100% de mutiplicador de daño",
            level: 1,
            textLevel: "LVL.1",
            values: [100]
        }
        let lvl2:SkillLevel={
            description: "105% de mutiplicador de daño",
            level: 2,
            textLevel: "LVL.2",
            values: [105]
        }
        let lvl3:SkillLevel={
            description: "110% de mutiplicador de daño",
            level: 3,
            textLevel: "LVL.3",
            values: [110]
        }
        let lvl4:SkillLevel={
            description: "115% de mutiplicador de daño",
            level: 4,
            textLevel: "LVL.4",
            values: [115]
        }
        let lvl5:SkillLevel={
            description: "120% de mutiplicador de daño",
            level: 5,
            textLevel: "LVL.5",
            values: [120]
        }
        let skill:KnightSkill={
            name:"Espada sagrada",
            description: "Inflige 100% de daño físico a un enemigo",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "70% (+2800) x3 de mutiplicador de daño",
            level: 1,
            textLevel: "LVL.1",
            values: [70,2800]
        }
        let lvl2:SkillLevel={
            description: "75% (+3000) x3 de mutiplicador de daño.",
            level: 2,
            textLevel: "LVL.2",
            values: [75,3000]
        }
        let lvl3:SkillLevel={
            description: "80% (+3200) x3 de mutiplicador de daño.",
            level: 3,
            textLevel: "LVL.3",
            values: [80,3200]
        }
        let lvl4:SkillLevel={
            description: "90% (+3600) x3 de mutiplicador de daño.",
            level: 4,
            textLevel: "LVL.4",
            values: [12,36]
        }
        let lvl5:SkillLevel={
            description: "100% (+4000) x3 de mutiplicador de daño.",
            level: 5,
            textLevel: "LVL.5",
            values: [15,45]
        }
        let skill:KnightSkill={
            name:"Ráfaga de espada sagrada",
            description: "Ataca a 1 enemigo 3 veces e inflige 70% + 2800 de daño físico cada vez. Si una unidad muere (incluidas las unidades invocadas), agrega permanentemente un ataque extra a la ráfaga de espada sagrada.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Aumenta el crítico en 800 durante la batalla",
            level: 1,
            textLevel: "LVL.1",
            values: [800]
        }
        let lvl2:SkillLevel={
            description: "Aumenta el crítico en 850 durante la batalla",
            level: 2,
            textLevel: "LVL.2",
            values: [850]
        }
        let lvl3:SkillLevel={
            description: "Aumenta el crítico en 900 durante la batalla",
            level: 3,
            textLevel: "LVL.3",
            values: [900]
        }
        let lvl4:SkillLevel={
            description: "Aumenta el crítico en 950 durante la batalla",
            level: 4,
            textLevel: "LVL.4",
            values: [950]
        }
        let lvl5:SkillLevel={
            description: "Aumenta el crítico en 1000 durante la batalla",
            level: 5,
            textLevel: "LVL.5",
            values: [1000]
        }
        let skill:KnightSkill={
            name:"Espada sagrada",
            description: "Aumenta el crítico en 800 durante la batalla",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "80% de probabilidad de ganar 1 ataque de forma permanente.Las muertes otorgan un aumento de CRÍT del 10%",
            level: 1,
            textLevel: "LVL.1",
            values: [80,10]
        }
        let lvl2:SkillLevel={
            description: "85% de probabilidad de ganar 1 ataque de forma permanente.Las muertes otorgan un aumento de CRÍT del 10%",
            level: 2,
            textLevel: "LVL.2",
            values: [85,10]
        }
        let lvl3:SkillLevel={
            description: "90% de probabilidad de ganar 1 ataque de forma permanente.Las muertes otorgan un aumento de CRÍT del 10%",
            level: 3,
            textLevel: "LVL.3",
            values: [90,10]
        }
        let lvl4:SkillLevel={
            description: "100% de probabilidad de ganar 1 ataque de forma permanente.Las muertes otorgan un aumento de CRÍT del 10%",
            level: 4,
            textLevel: "LVL.4",
            values: [8]
        }
        let lvl5:SkillLevel={
            description: "100% de probabilidad de ganar 1 ataque de forma permanente.Las muertes otorgan un aumento de CRÍT del 20%",
            level: 5,
            textLevel: "LVL.5",
            values: [100,20]
        }
        let skill:KnightSkill={
            name:"Filo de espada sagrada - Tras despertar",
            description: "Los ataques tienen un 100 % de probabilidad de otorgarle 1 ataque adicional permanente a la Ráfaga de espada sagrada (hasta un máximo de 10 ataques). Si este ataque asesta el golpe mortal, Shura gana un 20 % de CRÍT adicional de forma permanente (se acumula hasta 3 veces). Cada ataque tiene una probabilidad del 75 % de repeler al enemigo (lo puede repeler de las vides).",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}