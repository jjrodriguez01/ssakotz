import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";

export class Saga{
    create(): Knight{
        
        const knight = {
            id: 7,
            name: "Saga de Géminis",
            image: "assets/images/saga.webp", 
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
            description: "80% de daño cósmico",
            level: 1,
            textLevel: "LVL.1",
            values: [80]
        }
        let lvl2:SkillLevel={
            description: "85% de daño cósmico",
            level: 2,
            textLevel: "LVL.2",
            values: [85]
        }
        let lvl3:SkillLevel={
            description: "90% de daño cósmico",
            level: 3,
            textLevel: "LVL.3",
            values: [90]
        }
        let lvl4:SkillLevel={
            description: "95% de daño cósmico",
            level: 4,
            textLevel: "LVL.4",
            values: [95]
        }
        let lvl5:SkillLevel={
            description: "100% de daño cósmico",
            level: 5,
            textLevel: "LVL.5",
            values: [100]
        }
        let skill:KnightSkill={
            name:"Puño relámpago",
            description: "Inflige 80% de daño cósmico a un enemigo.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "170% de multiplicador de daño a todos los enemigos.",
            level: 1,
            textLevel: "LVL.1",
            values: [170]
        }
        let lvl2:SkillLevel={
            description: "180% de daño cósmico",
            level: 2,
            textLevel: "LVL.2",
            values: [180]
        }
        let lvl3:SkillLevel={
            description: "190% de daño cósmico",
            level: 3,
            textLevel: "LVL.3",
            values: [190]
        }
        let lvl4:SkillLevel={
            description: "200% de daño cósmico",
            level: 4,
            textLevel: "LVL.4",
            values: [200]
        }
        let lvl5:SkillLevel={
            description: "215% de daño cósmico",
            level: 5,
            textLevel: "LVL.5",
            values: [215]
        }
        let skill:KnightSkill={
            name:"Explosión galáctica",
            description: "Inflige un 170% de daño cósmico a todos los enemigos.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Aumenta en un 15% la perforación de defensa cósmica.",
            level: 1,
            textLevel: "LVL.1",
            values: [170]
        }
        let lvl2:SkillLevel={
            description: "Aumenta en un 20% la perforación de defensa cósmica.",
            level: 2,
            textLevel: "LVL.2",
            values: [20]
        }
        let lvl3:SkillLevel={
            description: "Aumenta en un 25% la perforación de defensa cósmica.",
            level: 3,
            textLevel: "LVL.3",
            values: [25]
        }
        let lvl4:SkillLevel={
            description: "Aumenta en un 30% la perforación de defensa cósmica.",
            level: 4,
            textLevel: "LVL.4",
            values: [30]
        }
        let lvl5:SkillLevel={
            description: "Aumenta en un 35% la perforación de defensa cósmica.",
            level: 5,
            textLevel: "LVL.5",
            values: [35]
        }
        let skill:KnightSkill={
            name:"Devastación mental",
            description: "Al atacar al enemigo, hay una probabilidad del 40% (más probabilidad de infligir estado) de aumentar la habilidad del ataque de perforar la defensa cósmica en un 15%.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "80% de multiplicador de daño; 10% de Robo de vida y res. de estado; Compresión de daño 1 vez.",
            level: 1,
            textLevel: "LVL.1",
            values: [80,10,1]
        }
        let lvl2:SkillLevel={
            description: "80% de multiplicador de daño; 20% de Robo de vida y res. de estado; Compresión de daño 1 vez.",
            level: 2,
            textLevel: "LVL.2",
            values: [80,20,1]
        }
        let lvl3:SkillLevel={
            description: "90% de multiplicador de daño; 20% de Robo de vida y res. de estado; Compresión de daño 2 veces.",
            level: 3,
            textLevel: "LVL.3",
            values: [90,20,2]
        }
        let lvl4:SkillLevel={
            description: "100% de multiplicador de daño; 30% de Robo de vida y res. de estado; Compresión de daño 2 veces.",
            level: 4,
            textLevel: "LVL.4",
            values: [100,30,2]
        }
        let lvl5:SkillLevel={
            description: "120% de multiplicador de daño; 35% de Robo de vida y res. de estado; Compresión de daño 3 veces.",
            level: 5,
            textLevel: "LVL.5",
            values: [120,35,3]
        }
        let skill:KnightSkill={
            name:"Cuerpo del Dilema - Tras despertar",
            description: "Saga posee el Cuerpo del dilema. [Bueno]: cuando Saga lanza Explosión galáctica, si 3 o más caballeros enemigos se ven afectados, se activa Devastación mental. Si 4 o más caballeros enemigos se ven afectados, se agrega un 20% de Robo de vida al ataque. Si 5 o más caballeros enemigos se ven afectados, la res. de estado aumenta un 20% despues de atacar. [Maligno] Cuando Saga lanza Explosión galáctica, parte del daño de los 2 lanzamientos anteriores de Explosión galáctica se añade al ataque lo que inflige DÑO C. adicional igual al 90% de los 2 lanzamientos anteriores.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}