import { Nutrientes } from 'src/models/Nutrientes';

export interface INutrientesService{
    calcularNutrientes(nutrientes:Nutrientes): Number
}