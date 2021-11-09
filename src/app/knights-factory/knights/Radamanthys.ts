import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";

export class Radamanthys{
    create(): Knight{
        
        const knight = {
            id: 6,
            name: "Radamantis de Wivern",
            image: "assets/images/radamantis.webp", 
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
            description: "35% x 3 (105%) de multiplicador de daño.",
            level: 1,
            textLevel: "LVL.1",
            values: [40]
        }
        let lvl2:SkillLevel={
            description: "40% x 3 (120%) de multiplicador de daño",
            level: 2,
            textLevel: "LVL.2",
            values: [40]
        }
        let lvl3:SkillLevel={
            description: "45% x 3 (135%) de multiplicador de daño.",
            level: 3,
            textLevel: "LVL.3",
            values: [45]
        }
        let lvl4:SkillLevel={
            description: "50% x3 (150%) de multiplicador de daño.",
            level: 4,
            textLevel: "LVL.4",
            values: [50]
        }
        let lvl5:SkillLevel={
            description: "55% x 3 (165%) de multiplicador de daño.",
            level: 5,
            textLevel: "LVL.5",
            values: [55]
        }
        let skill:KnightSkill={
            name:"Ataque fluctuante",
            description: "Radamantis ataca a un enemigo 3 veces e inflinge un 35% de daño cada vez que ataca.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Cada ola tiene un multiplicador de daño del 90%",
            level: 1,
            textLevel: "LVL.1",
            values: [90]
        }
        let lvl2:SkillLevel={
            description: "Cada ola tiene un multiplicador de daño del 95%",
            level: 2,
            textLevel: "LVL.2",
            values: [95]
        }
        let lvl3:SkillLevel={
            description: "Cada ola tiene un multiplicador de daño del 100%",
            level: 3,
            textLevel: "LVL.3",
            values: [100]
        }
        let lvl4:SkillLevel={
            description: "Cada ola tiene un multiplicador de daño del 105% y termina de cargarse antes de la siguiente ronda de acción",
            level: 4,
            textLevel: "LVL.4",
            values: [105]
        }
        let lvl5:SkillLevel={
            description: "Cada ola tiene un multiplicador de daño del 110% y termina de cargarse antes de la siguiente ronda de acción",
            level: 5,
            textLevel: "LVL.5",
            values: [110]
        }
        let skill:KnightSkill={
            name:"Vigilancia definitiva",
            description: "Se carga durante 1 ronda. Lanza 3 olas de alerta al comienzo de la tercera ronda de acción, y cada una inflige 90% de DÑO F a un enemigo al azar. Si Radamantis esta bajo control, las olas de alerta se libera la próxima vez que él actua",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "Arde con fuerza al llegar a las 5 cargas. Cada par de alas tiene un 10% de probabilidad de generar ondas adicionales",
            level: 1,
            textLevel: "LVL.1",
            values: [5,10]
        }
        let lvl2:SkillLevel={
            description: "Arde con fuerza al llegar a las 4 cargas. Cada par de alas tiene un 10% de probabilidad de generar ondas adicionales",
            level: 2,
            textLevel: "LVL.2",
            values: [4,10]
        }
        let lvl3:SkillLevel={
            description: "Arde con fuerza al llegar a las 4 cargas. Cada par de alas tiene un 30% de probabilidad de generar ondas adicionales",
            level: 3,
            textLevel: "LVL.3",
            values: [4,30]
        }
        let lvl4:SkillLevel={
            description: "Arde con fuerza al llegar a las 3 cargas. Cada par de alas tiene un 30% de probabilidad de generar ondas adicionales",
            level: 4,
            textLevel: "LVL.4",
            values: [3,30]
        }
        let lvl5:SkillLevel={
            description: "Arde con fuerza al llegar a las 3 cargas. Cada par de alas tiene un 50% de probabilidad de generar ondas adicionales",
            level: 5,
            textLevel: "LVL.5",
            values: [3,50]
        }
        let skill:KnightSkill={
            name:"Alas flameantes",
            description: "Cada vez que un aliado conecta un golpe crítico, las olas de dragón ganan 1 carga. Los críticos contínuos también otorgan 1 carga extra. Cada par de alas de dragón quema ferozmente al llegar a las 5 cargas. Cuando Radamantis lanza Vigilancia definitiva, cada par de alas de dragon ardientes tiene una probabilidad del 10% de generar 3 olas de alerta. Cuando los 4 pares de alas están ardiendo entra el estado de alas llameantes y genera 12 olas de alerta adicionales.",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            description: "50% de probabilidad de obtener una carga, la vidilancia definitiva inflige 120% de daño a los atacantes",
            level: 1,
            textLevel: "LVL.1",
            values: [50,120]
        }
        let lvl2:SkillLevel={
            description: "50% de probabilidad de obtener una carga, la vidilancia definitiva inflige 150% de daño a los atacantes",
            level: 2,
            textLevel: "LVL.2",
            values: [50,150]
        }
        let lvl3:SkillLevel={
            description: "60% de probabilidad de obtener una carga, la vidilancia definitiva inflige 150% de daño a los atacantes",
            level: 3,
            textLevel: "LVL.3",
            values: [60,150]
        }
        let lvl4:SkillLevel={
            description: "75% de probabilidad de obtener una carga, la vidilancia definitiva inflige 200% de daño a los atacantes",
            level: 4,
            textLevel: "LVL.4",
            values: [75,200]
        }
        let lvl5:SkillLevel={
            description: "100% de probabilidad de obtener una carga, la vidilancia definitiva inflige 200% de daño a los atacantes",
            level: 5,
            textLevel: "LVL.5",
            values: [100,200]
        }
        let skill:KnightSkill={
            name:"Rugido de oscuridad - Tras despertar",
            description: "Radamantis obtiene un 50 % de reducción de daño cuando está cargando, durante lo cual tiene un 100 % de probabilidad de obtener una carga cuando un aliado es atacado, o un 100 % de probabilidad cuando un aliado muere. Si recibe daño letal mientras carga, es inmune a la muerte (solo se activa una vez). Todos los enemigos que lo hayan atacado mientras estaba cargando recibirán un 200 % de daño de la Viailancia definitiva cargada",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5]
        }
        return skill
    }
}