import { Knight } from "../knight";
import { Knights } from "./Knights";
import { Afrodita } from "./knights/Afrodita";
import { HyogaArmaduraDivina } from "./knights/HyogaArmaduraDivina";
import { Kanon } from "./knights/Kanon";
import { Radamanthys } from "./knights/Radamanthys";
import { Saga } from "./knights/Saga";
import { Shura } from "./knights/shura";
import { Thanatos } from "./knights/Thanatos";
import {LinkedList} from 'typescript-collections';

export class KnightsFactory{
    list = new LinkedList<Knight>()
    constructor(){
        this.list.add(new Kanon())
        this.list.add(new Thanatos())
        this.list.add(new Radamanthys())
    }
    

    getAll(): Knight[]{
        return this.list.toArray()
    }

    getKnight(id: number): Knight | undefined{
        return this.list.toArray().find(x => x.id == id)
    }

}