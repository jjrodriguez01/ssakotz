import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class Radamanthys implements Knight{
    
    id = 6
    name = "Radamantis de Wivern"
    image= "assets/images/radamantis.webp"
    type= KnightTypeEnum.S
    level= 0
    basicAttributes= new BasicAttributes()
    battleAttributes= new BattleAttributes()
    skills= [this.getBasic(1), this.getFirstSkill(1), this.getSecondSkill(1),this.getThirdSkill(1)]
    damageType = DamageType.PHYSIC

    getBasic(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[35,0,0]);
        values.set(2,[40,0,0]);
        values.set(3,[45,0,0]);
        values.set(4,[50,5,2]);
        values.set(5,[55,15,3]);
        var levels:SkillLevel[] = []
        
        values.forEach((value: number[], key: number) => {
            let complemento = `y ${value[1]} de robo de vida durante ${value[2]} rondas de accion (se puede disipar)`
            if(key < 4){
                complemento = ``
            }
            let skill:SkillLevel={
                skillId:1,
                description: `${value[0]}% x 3 (${value[0]*3}%) de multiplicador de daño `+complemento,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []
        
        let skill:KnightSkill={
            id:1,
            name:"Ataque fluctuante",
            description: `Ataca a un enemigo 3 veces e inflinge un <b>${activeVal[0]}</b>% de daño cada vez que ataca.`,
            type: SkillType.ACTIVE,
            levels: levels,
            damageResult: ""
        }
        return skill
    }

    getFirstSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[90]);
        values.set(2,[95]);
        values.set(3,[100]);
        values.set(4,[105]);
        values.set(5,[110]);
        var levels:SkillLevel[] = []
        
        values.forEach((value: number[], key: number) => {
            let complemento = `y termina de cargarse antes de la siguiente ronda de accion`
            if(key < 4){
                complemento = ``
            }
            let skill:SkillLevel={
                skillId:2,
                description: `Cada ola tiene un multiplicador de daño del ${value[0]}% `+complemento,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []
        
        let skill:KnightSkill={
            id:2,
            name:"Vigilancia definitiva",
            description: `Se carga durante 1 ronda. Lanza 3 olas de alerta al comienzo de la tercera ronda de acción, y cada una inflige <b>${activeVal[0]}</b>% de DÑO F a un enemigo al azar. Si Radamantis esta bajo control, las olas de alerta se libera la próxima vez que él actua`,
            type: SkillType.ACTIVE,
            levels: levels,
            damageResult: ""
        }
        return skill
    }

    getSecondSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[5,10]);
        values.set(2,[4,10]);
        values.set(3,[4,30]);
        values.set(4,[3,30]);
        values.set(5,[3,50]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:3,
                description: `Arde con fuerza al llegar a las ${value[0]} cargas. Cada par de alas tiene un ${value[1]}% de probabilidad de generar ondas adicionales`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        let skill:KnightSkill={
            id:3,
            name:"Alas flameantes",
            description: `Cada vez que un aliado conecta un golpe crítico, las olas de dragón ganan 1 carga. Los críticos contínuos también otorgan 1 carga extra. Cada par de alas de dragón quema ferozmente al llegar a las <b>${activeVal[0]}</b> cargas. Cuando Radamantis lanza Vigilancia definitiva, cada par de alas de dragon ardientes tiene una probabilidad del <b>${activeVal[1]}</b>% de generar 3 olas de alerta. Cuando los 4 pares de alas están ardiendo entra el estado de alas llameantes y genera 12 olas de alerta adicionales`,
            type: SkillType.ACTIVE,
            levels: levels,
            damageResult: ""
        }
        return skill
    }

    getThirdSkill(level: number): KnightSkill {
        let values = new Map<number,number[]>();
        values.set(1,[50,120]);
        values.set(2,[50,150]);
        values.set(3,[60,150]);
        values.set(4,[75,200]);
        values.set(5,[100,200]);
        var levels:SkillLevel[] = []

        values.forEach((value: number[], key: number) => {
            let skill:SkillLevel={
                skillId:4,
                description: `Arde con fuerza al llegar a las <b>${value[0]}</b> cargas. Cada par de alas tiene un <b>${value[1]}</b>% de probabilidad de generar ondas adicionales`,
                level: key,
                values: value
            }
            levels.push(skill)
          });
        let activeLevel = levels.find(x => x.level === level)
        let activeVal = activeLevel !== undefined ? activeLevel.values : []

        let skill:KnightSkill={
            id:4,
            name:"Rugido de oscuridad - Tras despertar",
            description: `Radamantis obtiene un 50% de reducción de daño cuando está cargando, durante lo cual tiene un <b>${activeVal[0]}</b>% de probabilidad de obtener una carga cuando un aliado es atacado, o un 100 % de probabilidad cuando un aliado muere. Si recibe daño letal mientras carga, es inmune a la muerte (solo se activa una vez). Todos los enemigos que lo hayan atacado mientras estaba cargando recibirán un <b>${activeVal[1]}</b>% de daño de la Viailancia definitiva cargada`,
            type: SkillType.PASSIVE,
            levels: levels,
            damageResult: ""
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