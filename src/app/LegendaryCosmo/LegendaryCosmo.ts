import { Knight } from "../knight";
export interface LegendaryCosmo{
    id: number
    image: string
    name: string
    specialEffect: string
    values: number[]
    result(knight: Knight): string
}