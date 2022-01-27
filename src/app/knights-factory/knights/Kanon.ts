import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Kanon implements Knight{
    
    id = 4
    name = "Kanon de Géminis"
    image= "assets/images/kanon.webp" 
    type= KnightTypeEnum.S
    level= 0
    basicAttributes= new BasicAttributes()
    battleAttributes= new BattleAttributes()
    skills= [this.getBasic(1), this.getFirstSkill(1), this.getSecondSkill(1),this.getThirdSkill(1)]
    damageType = DamageType.COSMIC

    getBasic(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[80,3]);
        values.set(2,[80,6]);
        values.set(3,[90,7]);
        values.set(4,[90,10]);
        values.set(5,[100,15]);
        var levels:SkillLevel[] = []
        
        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:1,
                description: `Multiplicador de daño igual al ${value[0]}% + (${value[1]}% por acumulación de (determinación).`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []
        
        let skill:KnightSkill={
            id:1,
            name:"Satán Imperial",
            description: `Inflige DÑO C. igual al <b>${activeVal[0]}</b>% + (<b>${activeVal[1]}</b>% por acumulación de (determinación) a un enemigo).`,
            type: SkillType.ACTIVE,
            levels: levels
        }
        return skill
    }

    getFirstSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[250,90,1]);
        values.set(2,[270,100,2]);
        values.set(3,[290,110,2]);
        values.set(4,[310,120,3]);
        values.set(5,[330,130,3]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:2,
                description: `Inflige ${value[0]}% de DÑO C. y ${value[1]}% de daño verdadero. Obtiene ${value[2]} acumulación de determinación.`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        let skill:KnightSkill={
            id:2,
            name:"Explosión Galáctica - Oculto",
            description: `Libera Explosión galáctica en un enemigo, infligiendo <b>${activeVal[0]}</b>% de DÑO C. y <b>${activeVal[1]}</b>% de daño verdadero. Kanon se oculta durante 1 ronda de acción y luego de lanzar Explosión galáctica y obtiene <b>${activeVal[2]}</b> acumulación de determinación.`,
            type: SkillType.ACTIVE,
            levels: levels
        }
        return skill
    }

    getSecondSkill(level: number): KnightSkill {
        let lvl1:SkillLevel={
            skillId:3,
            description: "Obtiene 1 ataque adicional.",
            level: 1,
            values: []
        }
        let lvl2:SkillLevel={
            skillId:3,
            description: "Obtiene 1 ataque adicional por cada 10 acumulaciones de determinación (hasta 2 ataques).",
            level: 2,
            values: []
        }
        let lvl3:SkillLevel={
            skillId:3,
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 2 ataques). También obtiene 1 de energía cuando crea la ilusión",
            level: 3,
            values: []
        }
        let lvl4:SkillLevel={
            skillId:3,
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 3 ataques). También obtiene 2 de energía cuando crea la ilusión",
            level: 4,
            values: []
        }
        let lvl5:SkillLevel={
            skillId:3,
            description: "Obtiene 1 ataque adicional por cada 5 acumulaciones de determinación (hasta 4 ataques). También obtiene 3 de energía cuando crea la ilusión",
            level: 5,
            values: []
        }
        let skill:KnightSkill={
            id:3,
            name:"Fantásma de Géminis",
            description: "Antes de que Kanon inicie su acción, crea un fantasma de Géminis que no puede ser atacado. La ilusión hereda el ATQ y el multiplicador de DÑO C. y lanza un ataque idéntico al objetivo cuando Kanon ataca. Si el objetivo muere, ataca a un enemigo aleatorio.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[2,10,2]);
        values.set(2,[3,15,2]);
        values.set(3,[3,20,3]);
        values.set(4,[5,20,3]);
        values.set(5,[6,25,4]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:4,
                description: `Cuando un aliado muere obtiene ${value[0]} acumulaciones de determinación y restaura ${value[1]}% de los PS +${value[2]}% por cada acumulación de determinación.`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        
        let skill:KnightSkill={
            id:4,
            name:"Redención de corazón - Sello",
            description: `La muerte de su hermano y compañeros, como el renacimiento del caballero de Géminis, fortalecieron la voluntad de Kanon. Por cada aliado que muere, Kanon obtiene <b>${activeVal[0]}</b> acumulaciones de detarminación. Cuándo recibe daño mortal obtine Bendicion y restaura <b>${activeVal[1]}</b>% de sus PS de inmediate, y un <b>${activeVal[2]}</b>% adicional por cada acumulación de determinación. (solo se puede activar una vez por batalla). (Determinacion se acumula hasta 20 veces por batalla)`,
            type: SkillType.PASSIVE,
            levels: levels
        }
        return skill
    }

    getSkill(id:number, level:number):KnightSkill {
        let skill = this.getBasic(level);
        switch(id){
            case 1:
                skill = skill;
                break;
            case 2:
                skill = this.getFirstSkill(level);
                break;
            case 3:
                skill = this.getSecondSkill(level);
                break;
            case 4:
                skill = this.getThirdSkill(level);
                break;
            default:
                skill = skill;
                break;
        }
        return skill;
    }
}