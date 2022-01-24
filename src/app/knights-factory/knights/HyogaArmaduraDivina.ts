import { BasicAttributes } from "src/app/BasicAttributes";
import { Knight } from "src/app/knight";
import { KnightSkill } from "src/app/KnightSkill";
import { BattleAttributes } from "src/app/knights/BattleAttributes";
import { KnightTypeEnum } from "src/app/KnightType";
import { SkillType } from "src/app/SkillType";
import { SkillLevel } from "src/app/SkillLevel";
import { DamageType } from "src/app/DamageType";

export class HyogaArmaduraDivina /* implements Knight */{
    /* 
    id = 3
    name = "Hyoga de Cisne de Armadura Divina"
    image = "assets/images/hyoga-divino.webp" 
    type = KnightTypeEnum.S
    level = 0
    damageType = DamageType.COSMIC
    basicAttributes = new BasicAttributes()
    battleAttributes = new BattleAttributes()
    skills = [this.getBasic(), this.getFirstSkill(), this.getSecondSkill(),this.getThirdSkill()]

    getBasic(): KnightSkill {
        let lvl1:SkillLevel={
            skillId:1,
            description: "100% de DÑO C. 30% de añadir un acumulación de congelación (inflige 80% de DÑO cuando el objetivo actua)",
            level: 1,
            values: [100,30,80]
        }
        let lvl2:SkillLevel={
            skillId:1,
            description: "105% de DÑO C. 50% de añadir un acumulación de congelación (inflige 85% de DÑO cuando el objetivo actua)",
            level: 2,
            values: [105,50,85]
        }
        let lvl3:SkillLevel={
            skillId:1,
            description: "110% de DÑO C. 70% de añadir un acumulación de congelación (inflige 90% de DÑO cuando el objetivo actua)",
            level: 3,
            values: [110,70,90]
        }
        let lvl4:SkillLevel={
            skillId:1,
            description: "120% de DÑO C. 90% de añadir un acumulación de congelación (inflige 100% de DÑO cuando el objetivo actua)",
            level: 4,
            values: [120,90,100]
        }
        let lvl5:SkillLevel={
            skillId:1,
            description: "130% de DÑO C. 100% de añadir un acumulación de congelación (inflige 150% de DÑO cuando el objetivo actua)",
            level: 5,
            values: [130,100,150]
        }
        let skill:KnightSkill={
            id:1,
            name:"Polvo de cristal de hielo definitivo",
            description: "Inflige 120% de DÑO C. al objetivo con una probabilidad del 30% (+prob. de infligir estado) de añadir 1 acumulación de congelación al objetivo durante 2 rondas de acción",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5],
            activeLevel:1
        }
        return skill
    }

    getFirstSkill(): KnightSkill {
        let lvl1:SkillLevel={
            skillId:1,
            description: "400% de DÑO C. 50% de probabilidad de añadir congelación, 200% de probabilidad de DÑO C. al eliminar efectos",
            level: 1,
            values: [400,50,200]
        }
        let lvl2:SkillLevel={
            skillId:1,
            description: "450% de DÑO C. 60% de probabilidad de añadir congelación, 200% de probabilidad de DÑO C. al eliminar efectos",
            level: 2,
            values: [450,60,200]
        }
        let lvl3:SkillLevel={
            skillId:1,
            description: "500% de DÑO C. 60% de probabilidad de añadir congelación, 250% de probabilidad de DÑO C. al eliminar efectos",
            level: 3,
            values: [500,60,250]
        }
        let lvl4:SkillLevel={
            skillId:1,
            description: "550% de DÑO C. 80% de probabilidad de añadir congelación, 250% de probabilidad de DÑO C. al eliminar efectos",
            level: 4,
            values: [550,80,250]
        }
        let lvl5:SkillLevel={
            skillId:1,
            description: "600% de DÑO C. 100% de probabilidad de añadir congelación, 300% de probabilidad de DÑO C. al eliminar efectos",
            level: 5,
            values: [600,100,300]
        }
        let skill:KnightSkill={
            id:2,
            name:"Polvo de diamante definitivo",
            description: "Hyoga divino inflige 400% de DÑO C. a un enemigo. Si el objetivo está bajo congelamiento, Hielo negro o Atrapado en hielo, entonces hay un 50% de probabilidad (+ prob. de infligir estado) de añadir una acumulación de Congelación. Si el objetivo está bajo congelamiento, Hielo negro o Atrapado en hielo, entonces el efecto se elimina y el objetivo recibe un 200% de DÑO C. adicional",
            type: SkillType.ACTIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5],
            activeLevel:1
        }
        return skill
    }

    getSecondSkill(): KnightSkill {
        let lvl1:SkillLevel={
            skillId:1,
            description: "Al lanzar contra enemigos: 75% de probabilidad (+ prob. de infligir estado) de infligir atrapado en hielo. Al lanzar sobre aliados: Restaura 25% de los PS.",
            level: 1,
            values: [75,25]
        }
        let lvl2:SkillLevel={
            skillId:1,
            description: "Al lanzar contra enemigos: 80% de probabilidad (+ prob. de infligir estado) de infligir atrapado en hielo. Al lanzar sobre aliados: Restaura 30% de los PS.",
            level: 2,
            values: [80,30]
        }
        let lvl3:SkillLevel={
            skillId:1,
            description: "Al lanzar contra enemigos: 85% de probabilidad (+ prob. de infligir estado) de infligir atrapado en hielo. Al lanzar sobre aliados: Restaura 35% de los PS.",
            level: 3,
            values: [85,35]
        }
        let lvl4:SkillLevel={
            skillId:1,
            description: "Al lanzar contra enemigos: 90% de probabilidad (+ prob. de infligir estado) de infligir atrapado en hielo. Al lanzar sobre aliados: Restaura 40% de los PS.",
            level: 4,
            values: [90,40]
        }
        let lvl5:SkillLevel={
            skillId:1,
            description: "Al lanzar contra enemigos: 95% de probabilidad (+ prob. de infligir estado) de infligir atrapado en hielo. Al lanzar sobre aliados: Restaura 50% de los PS.",
            level: 5,
            values: [95,50]
        }
        let skill:KnightSkill={
            id:3,
            name:"Ataúd de hielo definitivo",
            description: "Cuando se lanza contra enemigos, Ataúd de hielo definitivo tiene una probabilidad del 75% (+ prob. de infligir estado) de infligir Atrapado en hielo sobre el objetivo durante 1 ronda completa. El objetivo es incapaz de actuar y obtiene 2 acumulaciones de Congelación (no se puede purificar pero puede ser eliminado por Lune). Cuando se lanza sobre aliados, el objetivo es incapaz de actuar y se vuelve inmune a todo daño (incluído el daño verdadero, se puede purificar). También restaura Ps igual al 25% de los PS máximos del objetivo.",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5],
            activeLevel:1
        }
        return skill
    }

    getThirdSkill(): KnightSkill {
        let lvl1:SkillLevel={
            skillId:1,
            description: "Inflige 100% de DÑO C. con probabilidad del 50% de añadir congelación",
            level: 1,
            values: [100,50]
        }
        let lvl2:SkillLevel={
            skillId:1,
            description: " Inflige 110% de DÑO C. con probabilidad del 60% de añadir congelación",
            level: 2,
            values: [110,60]
        }
        let lvl3:SkillLevel={
            skillId:1,
            description: "Inflige 120% de DÑO C. con probabilidad del 70% de añadir congelación",
            level: 3,
            values: [120,70]
        }
        let lvl4:SkillLevel={
            skillId:1,
            description: "Inflige 150% de DÑO C. con probabilidad del 80% de añadir congelación",
            level: 4,
            values: [150,80]
        }
        let lvl5:SkillLevel={
            skillId:1,
            description: "Inflige 200% de DÑO C. con probabilidad del 100% de añadir congelación",
            level: 5,
            values: [200,100]
        }
        let skill:KnightSkill={
            id:4,
            name:"Mirada de muerte",
            description: "Hyoga de armadura divina desata un aura congelante cuando se une al combate y añade una acumulación de sello de hielo a todos los enemigos durante rondas igualadas. Cuando ataca a enemigos con sello de hielo, hay una probabilidad del 8% (+ prob. de infligir estado) de Congelamiento. Cuando los aliados ponen efectos de control en los enemigos, el aura congelante resuena e inflige DÑO C. igual al 100% del ATQ C. de Hyoga divino. Cuando el objetivo enemigo elimina Congelamiento, hay una probabilidad del 50% de que obtenga Congelación durante 2 rondas de acción",
            type: SkillType.PASSIVE,
            levels: [lvl1,lvl2,lvl3,lvl4,lvl5],
            activeLevel:1
        }
        return skill
    } */
}