import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";

export class Afrodita{
    create(): Knight{
        
        const knight = {
            id: 1,
            name: "Afrodita de Piscis",
            image: "assets/images/afrodita.webp", 
            type: KnightTypeEnum.S,
            level: 0,
            basicAttributes: new BasicAttributes(),
            battleAttributes: new BattleAttributes(),
            skills: [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]
          };
        return knight
    }

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            description: "40% de multiplicador",
            level: 1,
            textLevel: "LVL.1",
            values: [40]
        }
        let lvl2:SkillLevel={
            description: "45% de multiplicador",
            level: 2,
            textLevel: "LVL.2",
            values: [45]
        }
        let lvl3:SkillLevel={
            description: "50% de multiplicador",
            level: 3,
            textLevel: "LVL.3",
            values: [50]
        }
        let lvl4:SkillLevel={
            description: "55% de multiplicador",
            level: 4,
            textLevel: "LVL.4",
            values: [55]
        }
        let lvl5:SkillLevel={
            description: "60% de multiplicador",
            level: 5,
            textLevel: "LVL.5",
            values: [60]
        }
        let skill:KnightSkill={
            name:"Rosa Diabólica Real",
            description: "Inflige un 40% de daño a 1 enemigo con una probabilidad del 90% de infligir veneno(acumulable hasta 5 veces, esto reduce el daño del objetivo en un 3%/6%/9%/12%/15% durante 2 rondas de acción .El efecto se reinicia si el objetivo es envenenado nuevamente durante la duración del efecto)",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "5% x 3 (15%) de multiplicador",
            level: 1,
            textLevel: "LVL.1",
            values: [5,15]
        }
        let lvl2:SkillLevel={
            description: "7% x 3 (21%) de multiplicador",
            level: 2,
            textLevel: "LVL.2",
            values: [7,21]
        }
        let lvl3:SkillLevel={
            description: "10% x 3 (30%) de multiplicador",
            level: 3,
            textLevel: "LVL.3",
            values: [10,30]
        }
        let lvl4:SkillLevel={
            description: "12% x 3 (36%) de multiplicador",
            level: 4,
            textLevel: "LVL.4",
            values: [12,36]
        }
        let lvl5:SkillLevel={
            description: "15% x 3 (45%) de multiplicador",
            level: 5,
            textLevel: "LVL.5",
            values: [15,45]
        }
        let skill:KnightSkill={
            name:"Rosa Piraña",
            description: "Ataca a 1 enemigo 3 veces(5% de daño físico cada vez). Cada ataque tiene una probabilidad del 30% (+ probabilidad de estado) de reducir la defensa del objetivo un 60% durante 2 rondas",
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
            name:"Rosa Sangrienta",
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