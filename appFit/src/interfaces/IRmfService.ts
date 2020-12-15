import { Rmf } from "src/models/Rmf";


export interface IRmfService{
    calcularPercentual(rmf:Rmf): number
}