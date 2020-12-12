import { TaxaMetabolica } from 'src/models/TaxaMetabolica';

export interface ItaxaMetabolica{
    calcularTaxaMetabolica(taxaMetabolica:TaxaMetabolica): Number
}