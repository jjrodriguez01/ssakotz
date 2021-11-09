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
        let saga:Saga = new Saga()
        knight_created = saga.create()

        switch(knkight){
            case Knights.AFRODITA:{
                let afrodita:Afrodita= new Afrodita()
                knight_created= afrodita.create()
                break;
            }
            case Knights.HYOGADIVINO:{
                let hyogaDivino:HyogaArmaduraDivina = new HyogaArmaduraDivina()
                knight_created = hyogaDivino.create()
                break;
            }
            case Knights.KANON:{
                let kanon:Kanon = new Kanon()
                knight_created = kanon.create()
                break;
            }
            case Knights.SAGA:{
                knight_created = saga.create()
                break;
            }
            case Knights.SHURA:{
                let shura:Shura=new Shura()
                knight_created=shura.create()
                break;
            }
            case Knights.RADAMANTIS:{
                let rada:Radamanthys=new Radamanthys()
                knight_created=rada.create()
                break;
            }
            case Knights.THANATOS:{
                let thanatos:Thanatos = new Thanatos()
                knight_created = thanatos.create()
            }

        }

        return knight_created
    }
}