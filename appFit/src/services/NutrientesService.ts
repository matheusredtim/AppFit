import { HttpClient } from '@angular/common/http';
import { INutrientesService } from 'src/interfaces/INutrientesService';
import { Nutrientes } from 'src/models/Nutrientes';
import { Injectable } from '@angular/core';
@Injectable({
    'providedIn': 'root'
})

export class NutrientesService implements INutrientesService{
    constructor(private _httpCliente: HttpClient){

    }
    calcularNutrientes(nutrientes: Nutrientes): Number {
        if(!nutrientes.peso) throw new Error ("preencha o campo peso corretamente")
        if(!nutrientes.tipoAtividade) throw new Error ("preencha o campo Tipo de exercicio corretamente")
        if(nutrientes.tipoAtividade == "leves"){
            nutrientes.carboidrato = nutrientes.peso* 3
            nutrientes.proteina = nutrientes.peso*1.3
            nutrientes.gordura = nutrientes.peso *1
            
        }
        if(nutrientes.tipoAtividade == "moderados"){
            nutrientes.carboidrato = nutrientes.peso*4
            nutrientes.proteina = nutrientes.peso * 1.5
            nutrientes.gordura = nutrientes.peso *1
            
        }
        if(nutrientes.tipoAtividade == "intensos"){
            nutrientes.carboidrato = nutrientes.peso* 6
            nutrientes.proteina = nutrientes.peso*2
            nutrientes.gordura = nutrientes.peso *1
            
        }
        return nutrientes.carboidrato,nutrientes.carboidrato,nutrientes.carboidrato
        throw new Error('Method not implemented.');
    }
}