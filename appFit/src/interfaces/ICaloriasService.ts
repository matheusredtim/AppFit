import { Calorias } from 'src/models/Calorias';

export interface ICaloriasService{
    calcularCalorias(calorias:Calorias) : Number
}