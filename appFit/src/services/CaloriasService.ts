import { HttpClient } from '@angular/common/http';
import { ICaloriasService } from 'src/interfaces/ICaloriasService';
import { Calorias } from 'src/models/Calorias';
import { Injectable } from '@angular/core';
@Injectable({
    'providedIn': 'root'
})

export class CaloriasService implements ICaloriasService{
    constructor(private _httpCliente: HttpClient){

    }
    calcularCalorias(calorias: Calorias): Number {
        if(!calorias.peso) throw new Error ("preencha o campo peso corretamente")
        if(!calorias.objetivo) throw new Error ("preencha o campo objetivo corretamente")
        if(calorias.objetivo =="manutencao") {
            calorias.resultado = calorias.peso* 40
        }
        if(calorias.objetivo == "hipertrofia"){
            calorias.resultado = calorias.peso*50
        }
        if(calorias.objetivo == "emagrecer"){
            calorias.resultado =  calorias.peso*30
        }
        return calorias.resultado
        throw new Error('Method not implemented.');
    }
}