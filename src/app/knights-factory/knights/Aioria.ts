import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Aioria implements Knight{
    
    id = 2
    name = "Aioria de Leo"
    image = "assets/images/aioria.webp"
    type = KnightTypeEnum.S
    level = 0
    damageType = DamageType.PHYSIC
    basicAttributes = new BasicAttributes()
    battleAttributes = new BattleAttributes()
    skills = [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            description: "50% de mutiplicador de daño",
            level: 1,
            textLevel: "LVL.1",
            values: [50]
        }
        let lvl2:SkillLevel={
            description: "52% de mutiplicador de daño",
            level: 2,
            textLevel: "LVL.2",
            values: [52]
        }
        let lvl3:SkillLevel={
            description: "55% de mutiplicador de daño",
            level: 3,
            textLevel: "LVL.3",
            values: [55]
        }
        let lvl4:SkillLevel={
            description: "57% de mutiplicador de daño",
            level: 4,
            textLevel: "LVL.4",
            values: [57]
        }
        let lvl5:SkillLevel={
            description: "60% de mutiplicador de daño",
            level: 5,
            textLevel: "LVL.5",
            values: [60]
        }
        let skill:KnightSkill={
            name:"Puño a la velocidad de la luz",
            description: "Inflige 50% de daño físico a 1 enemigo",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "65% de mutiplicador de daño a todos los enemigos",
            level: 1,
            textLevel: "LVL.1",
            values: [65]
        }
        let lvl2:SkillLevel={
            description: "70% de mutiplicador de daño a todos los enemigos",
            level: 2,
            textLevel: "LVL.2",
            values: [70]
        }
        let lvl3:SkillLevel={
            description: "75% de mutiplicador de daño a todos los enemigos",
            level: 3,
            textLevel: "LVL.3",
            values: [75]
        }
        let lvl4:SkillLevel={
            description: "80% de mutiplicador de daño a todos los enemigos",
            level: 4,
            textLevel: "LVL.4",
            values: [80]
        }
        let lvl5:SkillLevel={
            description: "85% de mutiplicador de daño a todos los enemigos",
            level: 5,
            textLevel: "LVL.5",
            values: [85]
        }
        let skill:KnightSkill={
            name:"Plasma relámpago",
            description: "Ultracarga de puño relámpago. Forma una gigantesca red de poder inevitable, que inflige un 85% de daño físico a todos los enemigos",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Rayo adicional con un 75% de herencia de daño",
            level: 1,
            textLevel: "LVL.1",
            values: [75]
        }
        let lvl2:SkillLevel={
            description: "Rayo adicional con un 79% de herencia de daño",
            level: 2,
            textLevel: "LVL.2",
            values: [79]
        }
        let lvl3:SkillLevel={
            description: "Rayo adicional con un 83% de herencia de daño",
            level: 3,
            textLevel: "LVL.3",
            values: [83]
        }
        let lvl4:SkillLevel={
            description: "Rayo adicional con un 88% de herencia de daño",
            level: 4,
            textLevel: "LVL.4",
            values: [88]
        }
        let lvl5:SkillLevel={
            description: "Rayo adicional con un 92% de herencia de daño",
            level: 5,
            textLevel: "LVL.5",
            values: [92]
        }
        let skill:KnightSkill={
            name:"Relámpago",
            description: "Al atacar, hay una probabilidad del 80% de infligir ataques de rayo (cada ataque de rayo inflige un 75% del daño del anterior, hasta 6 ataques).",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "3 golpes adicionales, aumenta el daño cósmico y la resistencia física en un 5% y el nivel de CRÍT físico en 500",
            level: 1,
            textLevel: "LVL.1",
            values: [3,5,500]
        }
        let lvl2:SkillLevel={
            description: "3 golpes adicionales, aumenta el daño cósmico y la resistencia física en un 10% y el nivel de CRÍT físico en 500",
            level: 2,
            textLevel: "LVL.2",
            values: [3,10,500]
        }
        let lvl3:SkillLevel={
            description: "4 golpes adicionales, aumenta el daño cósmico y la resistencia física en un 10% y el nivel de CRÍT físico en 500",
            level: 3,
            textLevel: "LVL.3",
            values: [4,10,500]
        }
        let lvl4:SkillLevel={
            description: "4 golpes adicionales, aumenta el daño cósmico y la resistencia física en un 10% y el nivel de CRÍT físico en 900",
            level: 4,
            textLevel: "LVL.4",
            values: [4,10,900]
        }
        let lvl5:SkillLevel={
            description: "5 golpes adicionales, aumenta el daño cósmico y la resistencia física en un 20% y el nivel de CRÍT físico en 900",
            level: 5,
            textLevel: "LVL.5",
            values: [5,20,900]
        }
        let skill:KnightSkill={
            name:"Filo de espada sagrada - Tras despertar",
            description: "Si el objetivo está bajo control de masas, el Puño a la velocidad de la luz será un combo de 6 golpes. Dañar a una unidad bajo el control de masas aumenta el Res. de DÑO C. y la Res. de DÑO F. de Leo en un 5 % y su nivel de CRÍT físico en 500 durante 5 turnos (Res. de DÑO C. y la Res. de DÑO F. tienen un límite del 60 % y el nivel de CRÍT físico de 2700). Si todos los enemigos están baio control de masas, tanto el Puño a la velocidad de la luz como el Plásma relámpago se pueden activar. Si 3 o más enemigos están bajo el control de masas, Leo lanza un combo de 3 golpes del Puño a la velocidad de la luz (sin pérdida de daño) contra los enemigos bajo control de masas",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}