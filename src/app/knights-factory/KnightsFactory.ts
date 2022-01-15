import { Knight } from "../knight";
import { Knights } from "./Knights";
import { Afrodita } from "./knights/Afrodita";
import { HyogaArmaduraDivina } from "./knights/HyogaArmaduraDivina";
import { Kanon } from "./knights/Kanon";
import { Radamanthys } from "./knights/Radamanthys";
import { Saga } from "./knights/Saga";
import { Shura } from "./knights/shura";
import { Thanatos } from "./knights/Thanatos";

export class KnightsFactory{
    static create(knkight: Knights): Knight{
        let knight_created:Knight

        switch(knkight){
            case Knights.AFRODITA:{
                knight_created = new Afrodita()
                break;
            }
            case Knights.HYOGADIVINO:{
                knight_created = new HyogaArmaduraDivina()
                break;
            }
            case Knights.KANON:{
                knight_created = new Kanon()
                break;
            }
            case Knights.SAGA:{
                knight_created = new Saga()
                break;
            }
            case Knights.SHURA:{
                knight_created=new Shura()
                break;
            }
            case Knights.RADAMANTIS:{
                knight_created=new Radamanthys()
                break;
            }
            case Knights.THANATOS:{
                knight_created = new Thanatos()
            }

        }

        return knight_created
    }
}