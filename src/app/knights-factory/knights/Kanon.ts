import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";

export class Kanon{
    create(): Knight{
        
        const knight = {
            id:4,
            name: "Kanon de Géminis",
            image: "assets/images/kanon.webp", 
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
            description: "Multiplicador de daño igual al 80% + (3% por acumulación de (determinación).",
            level: 1,
            textLevel: "LVL.1",
            values: [80,3]
        }
        let lvl2:SkillLevel={
            description: "Multiplicador de daño igual al 80% + (6% por acumulación de (determinación).",
            level: 2,
            textLevel: "LVL.2",
            values: [80,6]
        }
        let lvl3:SkillLevel={
            description: "Multiplicador de daño igual al 90% + (7% por acumulación de (determinación).",
            level: 3,
            textLevel: "LVL.3",
            values: [90,7]
        }
        let lvl4:SkillLevel={
            description: "Multiplicador de daño igual al 90% + (10% por acumulación de (determinación).",
            level: 4,
            textLevel: "LVL.4",
            values: [90,10]
        }
        let lvl5:SkillLevel={
            description: "Multiplicador de daño igual al 100% + (15% por acumulación de (determinación).",
            level: 5,
            textLevel: "LVL.5",
            values: [100,15]
        }
        let skill:KnightSkill={
            name:"Satán Imperial",
            description: "Inflige DÑO C. igual al 80% + (3% por acumulación de (determinación) a un enemigo).",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Inflige 250% de DÑO C. y 90% de daño verdadero. Obtiene 1 acumulación de determinación.",
            level: 1,
            textLevel: "LVL.1",
            values: [250,90,1]
        }
        let lvl2:SkillLevel={
            description: "Inflige 270% de DÑO C. y 100% de daño verdadero. Obtiene 2 acumulación de determinación.",
            level: 2,
            textLevel: "LVL.2",
            values: [270,100,2]
        }
        let lvl3:SkillLevel={
            description: "Inflige 290% de DÑO C. y 100% de daño verdadero. Obtiene 2 acumulación de determinación.",
            level: 3,
            textLevel: "LVL.3",
            values: [290,110,2]
        }
        let lvl4:SkillLevel={
            description: "Inflige 310% de DÑO C. y 120% de daño verdadero. Obtiene 3 acumulación de determinación.",
            level: 4,
            textLevel: "LVL.4",
            values: [310,120,3]
        }
        let lvl5:SkillLevel={
            description: "Inflige 330% de DÑO C. y 130% de daño verdadero. Obtiene 3 acumulación de determinación.",
            level: 5,
            textLevel: "LVL.5",
            values: [330,130,3]
        }
        let skill:KnightSkill={
            name:"Explosión Galáctica - Oculto",
            description: "Libera Explosión galáctica en un enemigo, infligiendo 250% de DÑO C. y 90% de daño verdadero. Kanon se oculta durante 1 ronda de acción y luego de lanzar Explosión galáctica y obtiene una acumulación de determinación.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Obtiene 1 ataque adicional.",
            level: 1,
            textLevel: "LVL.1",
            values: []
        }
        let lvl2:SkillLevel={
            description: "Obtiene 1 ataque adicional por cada 10 acumulaciones de determinación (hasta 2 ataques).",
            level: 2,
            textLevel: "LVL.2",
            values: []
        }
        let lvl3:SkillLevel={
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 2 ataques). También obtiene 1 de energía cuando crea la ilusión",
            level: 3,
            textLevel: "LVL.3",
            values: []
        }
        let lvl4:SkillLevel={
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 3 ataques). También obtiene 2 de energía cuando crea la ilusión",
            level: 4,
            textLevel: "LVL.4",
            values: []
        }
        let lvl5:SkillLevel={
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 4 ataques). También obtiene 3 de energía cuando crea la ilusión",
            level: 5,
            textLevel: "LVL.5",
            values: []
        }
        let skill:KnightSkill={
            name:"Alas flameantes",
            description: "Antes de que Kanon inicie su acción, crea un fantasma de Géminis que no puede ser atacado. La ilusión hereda el ATQ y el multiplicador de DÑO C. y lanza un ataque idéntico al objetivo cuando Kanon ataca. Si el objetivo muere, ataca a un enemigo aleatorio.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Cuando un aliado muere obtiene 2 acumulaciones de determinación y restaura 10% de los PS +2% por cada acumulación de determinación.",
            level: 1,
            textLevel: "LVL.1",
            values: [50,120]
        }
        let lvl2:SkillLevel={
            description: "Cuando un aliado muere obtiene 3 acumulaciones de determinación y restaura 15% de los PS +2% por cada acumulación de determinación.",
            level: 2,
            textLevel: "LVL.2",
            values: [50,150]
        }
        let lvl3:SkillLevel={
            description: "Cuando un aliado muere obtiene 4 acumulaciones de determinación y restaura 20% de los PS +3% por cada acumulación de determinación.",
            level: 3,
            textLevel: "LVL.3",
            values: [60,150]
        }
        let lvl4:SkillLevel={
            description: "Cuando un aliado muere obtiene 5 acumulaciones de determinación y restaura 20% de los PS +3% por cada acumulación de determinación.",
            level: 4,
            textLevel: "LVL.4",
            values: [75,200]
        }
        let lvl5:SkillLevel={
            description: "Cuando un aliado muere obtiene 6 acumulaciones de determinación y restaura 25% de los PS +4% por cada acumulación de determinación.",
            level: 5,
            textLevel: "LVL.5",
            values: [100,200]
        }
        let skill:KnightSkill={
            name:"Redención de corazón - Sello",
            description: "La muerte de su hermano y compañeros, como el renacimiento del caballero de Géminis, fortalecieron la voluntad de Kanon. Por cada aliado que muere, Kanon obtiene Bendición y restaura 10% de sus PS de inmediate un 2% adicional por cada acumulación de determinación. (solo se puede activar una vez por batalla).",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}