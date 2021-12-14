import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Thanatos implements Knight{
    
    id= 9
    name= "Thanatos"
    image= "assets/images/thanatos.webp"
    type= KnightTypeEnum.SS
    level= 0
    basicAttributes= new BasicAttributes()
    battleAttributes= new BattleAttributes()
    skills= [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]
    damageType = DamageType.PHYSIC

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Inflige 120% de DÑO F, aumenta 2 de furia",
            level: 1,
            textLevel: "LVL.1",
            values: [120]
        }
        let lvl2:SkillLevel={
            description: "Inflige 130% de DÑO F, aumenta 4 de furia",
            level: 2,
            textLevel: "LVL.2",
            values: [130]
        }
        let lvl3:SkillLevel={
            description: "Inflige 140% de DÑO F, aumenta 7 de furia",
            level: 3,
            textLevel: "LVL.3",
            values: [140]
        }
        let lvl4:SkillLevel={
            description: "Inflige 150% de DÑO F, aumenta 10 de furia",
            level: 4,
            textLevel: "LVL.4",
            values: [150]
        }
        let lvl5:SkillLevel={
            description: "Inflige 170% de DÑO F, aumenta 15 de furia",
            level: 5,
            textLevel: "LVL.5",
            values: [170]
        }
        let skill:KnightSkill={
            name:"Castigo divino",
            description: "Inflige 120% de DÑO F. a un enemigo y le otorga a Thanatos 2 de furia",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Inflige 50% de DÑO F, cada vez que ataca y otorga 10 de furia. Si Thanatos tiene menos de 40 de furia otorga 5 de furia adicional",
            level: 1,
            textLevel: "LVL.1",
            values: [50]
        }
        let lvl2:SkillLevel={
            description: "Inflige 60% de DÑO F, cada vez que ataca y otorga 10 de furia. Si Thanatos tiene menos de 50 de furia otorga 10 de furia adicional",
            level: 2,
            textLevel: "LVL.2",
            values: [60]
        }
        let lvl3:SkillLevel={
            description: "Inflige 70% de DÑO F, cada vez que ataca y otorga 10 de furia. Si Thanatos tiene menos de 50 de furia otorga 10 de furia adicional",
            level: 3,
            textLevel: "LVL.3",
            values: [70]
        }
        let lvl4:SkillLevel={
            description: "Inflige 80% de DÑO F, cada vez que ataca y otorga 10 de furia. Si Thanatos tiene menos de 60 de furia otorga 15 de furia adicional",
            level: 4,
            textLevel: "LVL.4",
            values: [80]
        }
        let lvl5:SkillLevel={
            description: "Inflige 100% de DÑO F, cada vez que ataca y otorga 10 de furia. Si Thanatos tiene menos de 60 de furia otorga 20 de furia adicional",
            level: 5,
            textLevel: "LVL.5",
            values: [100]
        }
        let skill:KnightSkill={
            name:"Destino aterrador",
            description: "Ataca a un enemigo 5 veces, lo que inflige un 50% de DÑO f. y aumenta la ira de Thanatos en 10 cada ocasión. Si su ira es menor de 40, aumenta más su ira en 5. Por cada aliado que muere antes de usar esta habilidad, la ira aumenta en 10",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Inflige 60% de daño verdadero a todos los enemigos y reduce un 5% de su DEF F. y DEF C.",
            level: 1,
            textLevel: "LVL.1",
            values: [60]
        }
        let lvl2:SkillLevel={
            description: "Inflige 80% de daño verdadero a todos los enemigos y reduce un 5% de su DEF F. y DEF C.",
            level: 2,
            textLevel: "LVL.2",
            values: [80]
        }
        let lvl3:SkillLevel={
            description: "Inflige 100% de daño verdadero a todos los enemigos y reduce un 5% de su DEF F. y DEF C.",
            level: 3,
            textLevel: "LVL.3",
            values: [100]
        }
        let lvl4:SkillLevel={
            description: "Inflige 130% de daño verdadero a todos los enemigos y reduce un 7% de su DEF F. y DEF C.",
            level: 4,
            textLevel: "LVL.4",
            values: [130]
        }
        let lvl5:SkillLevel={
            description: "Inflige 160% de daño verdadero a todos los enemigos y reduce un 7% de su DEF F. y DEF C.",
            level: 5,
            textLevel: "LVL.5",
            values: [160]
        }
        let skill:KnightSkill={
            name:"Poderío final",
            description: "Cuando la ira de Thanatos está completa, consume toda la ira y lanza poderío final, que inflie 60% de daño verdadero, (junto con el ataque aumentado al 100% por la ira) y destroza a todos los enemigos",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "El objetivo recibe 1000% de DÑO F., luego de actuar 4 veces. Si la ira de Thanatos está por encima de 60, recibe 20% de daño adicional.",
            level: 1,
            textLevel: "LVL.1",
            values: [1000,20]
        }
        let lvl2:SkillLevel={
            description: " El objetivo recibe 1100% de DÑO F., luego de actuar 4 veces. Si la ira de Thanatos está por encima de 60, recibe 30% de daño adicional.",
            level: 2,
            textLevel: "LVL.2",
            values: [1100,30]
        }
        let lvl3:SkillLevel={
            description: "El objetivo recibe 1100% de DÑO F., luego de actuar 3 veces. Si la ira de Thanatos está por encima de 50, recibe 40% de daño adicional.",
            level: 3,
            textLevel: "LVL.3",
            values: [1100,40]
        }
        let lvl4:SkillLevel={
            description: "El objetivo recibe 1300% de DÑO F., luego de actuar 3 veces. Si la ira de Thanatos está por encima de 40, recibe 45% de daño adicional.",
            level: 4,
            textLevel: "LVL.4",
            values: [1300,45]
        }
        let lvl5:SkillLevel={
            description: "El objetivo recibe 1300% de DÑO F., luego de actuar 2 veces. Si la ira de Thanatos está por encima de 40, recibe 50% de daño adicional.",
            level: 5,
            textLevel: "LVL.5",
            values: [1300,50]
        }
        let skill:KnightSkill={
            name:"Mirada de muerte",
            description: "Thanatos apunta a un objetivo que recibe 1000% de DÑO F. si sigue vivo después de 4 rondas de acción. Si la ira de Thanatos está por encima de 60, el objetivo recibe 20% de daño adicional.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}