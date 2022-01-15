import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Mu implements Knight{
    
    id = 5
    name = "Mu de Aries"
    image= "assets/images/mu.webp"
    type= KnightTypeEnum.S
    level= 0
    basicAttributes= new BasicAttributes()
    battleAttributes= new BattleAttributes()
    skills= [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]
    damageType = DamageType.COSMIC

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            description: "100% de multiplicador de daño , 20% de recuperacion de PS y 3% adicional de absorcion de daño",
            level: 1,
            textLevel: "LVL.1",
            values: [100, 20, 3]
        }
        let lvl2:SkillLevel={
            description: "105% de multiplicador de daño , 20% de recuperacion de PS y 10% adicional de absorcion de daño",
            level: 2,
            textLevel: "LVL.2",
            values: [105,20,10]
        }
        let lvl3:SkillLevel={
            description: "110% de multiplicador de daño , 30% de recuperacion de PS y 15% adicional de absorcion de daño",
            level: 3,
            textLevel: "LVL.3",
            values: [110,30,15]
        }
        let lvl4:SkillLevel={
            description: "120% de multiplicador de daño , 30% de recuperacion de PS y 25% adicional de absorcion de daño",
            level: 4,
            textLevel: "LVL.4",
            values: [120,30,25]
        }
        let lvl5:SkillLevel={
            description: "130% de multiplicador de daño , 45% de recuperacion de PS y 35% adicional de absorcion de daño",
            level: 5,
            textLevel: "LVL.5",
            values: [130,45,35]
        }
        let skill:KnightSkill={
            name:"Psicoquinesia - Tras despertar",
            description: "Inflige 100% de daño cósmico a un enemigo y restaura 20% de los PS de Mu .Si Mu esta bajo la proteccion del Muro de cristal, el muro se clona y ambos muros se tranfieren a los 2 aliados con menos PS. Mu ya no estara bajo el efecto del muro. Ambos muros clonados duraran 3 rondas y recibira 35% de daño adicional",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "24% de muro de escudo de PS.",
            level: 1,
            textLevel: "LVL.1",
            values: [24]
        }
        let lvl2:SkillLevel={
            description: "26% de muro de escudo de PS.",
            level: 2,
            textLevel: "LVL.2",
            values: [26]
        }
        let lvl3:SkillLevel={
            description: "28% de muro de escudo de PS.",
            level: 3,
            textLevel: "LVL.3",
            values: [28]
        }
        let lvl4:SkillLevel={
            description: "30% de muro de escudo de PS.",
            level: 4,
            textLevel: "LVL.4",
            values: [30]
        }
        let lvl5:SkillLevel={
            description: "32% de muro de escudo de PS.",
            level: 5,
            textLevel: "LVL.5",
            values: [32]
        }
        let skill:KnightSkill={
            name:"Muro de cristal",
            description: "Erige un muro de cristal frente a 1 caballero aliado que puede repeler cualquier daño. El muro de cristal dura 2 rondas y se romperá tras absorber un daño equivalente al 24% de la salud máxima e Mu de Aries. (Los muros de cristal no se pueden acumular).",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "70%/220% de Robo de vida",
            level: 1,
            textLevel: "LVL.1",
            values: [70,220]
        }
        let lvl2:SkillLevel={
            description: "73%/260% de Robo de vida",
            level: 2,
            textLevel: "LVL.2",
            values: [73,260]
        }
        let lvl3:SkillLevel={
            description: "75%/300% de Robo de vida",
            level: 3,
            textLevel: "LVL.3",
            values: [75,300]
        }
        let lvl4:SkillLevel={
            description: "78%/340% de Robo de vida",
            level: 4,
            textLevel: "LVL.4",
            values: [78,340]
        }
        let lvl5:SkillLevel={
            description: "80%/380% de Robo de vida",
            level: 5,
            textLevel: "LVL.5",
            values: [80,380]
        }
        let skill:KnightSkill={
            name:"Extinción estelar",
            description: "Entierra la rosa sangrienta en el corazón de 1 enemigo y roba PS equivalentes al 70%/140%/210% del daño al comienzo de las siguientes 3 rondas de acción del objetivo. Si el objetivo ya tiene la rosa diabólica real y la rosa piraña ,la rosa sangrienta roba directamente PS equivalentes al 220% de daño. (En modo multijugador las rosas de varios Afroditas no cuentan juntas)",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Lanza 1 rosa adicional. También lanza una rosa cada vez que pierde 20% de PS",
            level: 1,
            textLevel: "LVL.1",
            values: [20]
        }
        let lvl2:SkillLevel={
            description: "Lanza 1 rosa adicional. También lanza una rosa cada vez que pierde 15% de PS",
            level: 2,
            textLevel: "LVL.2",
            values: [1,15]
        }
        let lvl3:SkillLevel={
            description: "Lanza 2 rosas adicionales. También lanza una rosa cada vez que pierde 10% de PS",
            level: 3,
            textLevel: "LVL.3",
            values: [2,10]
        }
        let lvl4:SkillLevel={
            description: "Lanza 2 rosas adicionales. También lanza una rosa cada vez que pierde 8% de PS",
            level: 4,
            textLevel: "LVL.4",
            values: [2,8]
        }
        let lvl5:SkillLevel={
            description: "Lanza 3 rosas adicionales. También lanza una rosa cada vez que pierde 8% de PS",
            level: 5,
            textLevel: "LVL.5",
            values: [3,8]
        }
        let skill:KnightSkill={
            name:"Guerrero de la belleza - Tras despertar",
            description: "Afrodita tiene una probabilidad de lanzar una rosa tras atacar. También lanzará una rosa por cada pérdida del 20%. Si es el último caballero en actuar, entonces soltará una rosa en un enemido aleatorio por cada punto de energía extra tras el ataque",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}