import { HttpClient } from '@angular/common/http';
import { ItaxaMetabolica } from 'src/interfaces/ITaxaMetabolica';
import { TaxaMetabolica } from 'src/models/TaxaMetabolica';
import { Injectable } from '@angular/core';
@Injectable({
    'providedIn': 'root'
})

export class TaxaMetabolicaService implements ItaxaMetabolica{
    constructor(private _httpCliente: HttpClient){

    }
    calcularTaxaMetabolica(taxaMetabolica: TaxaMetabolica): Number {
        if(!taxaMetabolica.peso) throw new Error ("preencha o campo peso corretamente")
        if(!taxaMetabolica.altura) throw new Error ("preencha o campo altura corretamente")
        if(!taxaMetabolica.idade) throw new Error ("preencha o campo idade corretamente")
        if(!taxaMetabolica.genero) throw new Error ("preencha o campo genero corretamente")
        if (taxaMetabolica.genero == "M"){
            taxaMetabolica.resultado = ((taxaMetabolica.peso*10)+(taxaMetabolica.altura*6.25)-(taxaMetabolica.idade*5))+5
        }
        if (taxaMetabolica.genero == "F"){
            taxaMetabolica.resultado = ((taxaMetabolica.peso*10)+(taxaMetabolica.altura*6.25)-(taxaMetabolica.idade*5))-161
        }
        return taxaMetabolica.resultado
      
        throw new Error('Tudo Certo.');
    }

}