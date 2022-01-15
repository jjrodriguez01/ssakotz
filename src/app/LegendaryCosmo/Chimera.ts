import { Knight } from "../knight";
import { LegendaryCosmo } from "./LegendaryCosmo";

export class Chimera implements LegendaryCosmo{
    id = 1;
    image = "assets/images/cosmo/quimera.PNG";
    name = "Quimera";
    specialEffect = "Aumenta un 15% el Atq F. y un 4% el Efecto Crítico cuando se ataca manualmente (durante 4 rondas) tras atacar se reduce un 30% de la velocidad permanentemente(en este combate).";
    values = [15,4,4,30];
    
    result(knight: Knight):string{
        return "El Ataque físico incrementa en " + ((knight.basicAttributes.physicalAtk/15)/100).toFixed();
    }
}