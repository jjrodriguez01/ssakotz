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
    skills= [this.getBasic(1), this.getFirstSkill(1), this.getSecondSkill(1),this.getThirdSkill(1)]
    damageType = DamageType.PHYSIC

    getBasic(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[120,2]);
        values.set(2,[130,4]);
        values.set(3,[140,7]);
        values.set(4,[150,10]);
        values.set(5,[170,15]);
        var levels:SkillLevel[] = []
        
        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:1,
                description: `Inflige ${value[0]}% de DÑO F, aumenta ${value[1]} de furia`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []
        let skill:KnightSkill={
            id: 1,
            name:"Castigo divino",
            //description: activeSkill !== undefined ? activeSkill.description:"",
            description: `Inflige ${activeVal[0]}% de DÑO F. a un enemigo y le otorga a Thanatos ${activeVal[1]} de furia`,
            type: SkillType.ACTIVE,
            levels: levels
        }
        return skill
    }

    getFirstSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[50,10,40,5]);
        values.set(2,[60,10,50,10]);
        values.set(3,[70,10,50,10]);
        values.set(4,[80,20,60,15]);
        values.set(5,[100,20,60,20]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:2,
                description: `Inflige ${value[0]}% de DÑO F, cada vez que ataca y otorga ${value[1]} de furia. Si Thanatos tiene menos de ${value[2]} de furia otorga ${value[3]} de furia adicional`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        let skill:KnightSkill={
            id:2,
            name:"Destino aterrador",
            description: `Ataca a un enemigo 5 veces, lo que inflige un ${activeVal[0]}% de DÑO f. y aumenta la ira de Thanatos en ${activeVal[1]} cada ocasión. Si su ira es menor de ${activeVal[2]}, aumenta más su ira en 5. Por cada aliado que muere antes de usar esta habilidad, la ira aumenta en 10.`,
            type: SkillType.ACTIVE,
            levels: levels
        }
        return skill
    }

    getSecondSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[60,5]);
        values.set(2,[80,5]);
        values.set(3,[100,5]);
        values.set(4,[130,7]);
        values.set(5,[160,7]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:3,
                description: `Inflige ${value[0]}% de daño verdadero a todos los enemigos y reduce un ${value[1]}% de su DEF F. y DEF C.`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        let skill:KnightSkill={
            id:3,
            name:"Poderío final",
            description: `Cuando la ira de Thanatos está completa, consume toda la ira y lanza poderío final, que inflige ${activeVal[0]}% de daño verdadero (junto con el ataque aumentado al 100% por la ira) y destroza a todos los enemigos`,
            type: SkillType.PASSIVE,
            levels: levels
        }
        return skill
    }

    getThirdSkill(level : number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[1000,4,60,20]);
        values.set(2,[1100,4,60,30]);
        values.set(3,[1100,3,50,40]);
        values.set(4,[1300,3,40,45]);
        values.set(5,[1300,2,40,50]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:4,
                description: `El objetivo recibe ${value[0]}% de DÑO F., luego de actuar ${value[1]} veces. Si la ira de Thanatos está por encima de ${value[2]}, recibe ${value[3]}% de daño adicional.`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        
        let skill:KnightSkill={
            id:4,
            name:"Mirada de muerte",
            description: `Thanatos apunta a un objetivo que recibe ${activeVal[0]}% de DÑO F., si sigue vivo después de ${activeVal[1]} rondas de accion. Si la ira de Thanatos está por encima de ${activeVal[2]}, recibe ${activeVal[3]}% de daño adicional.`,
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