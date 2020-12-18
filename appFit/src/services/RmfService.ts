import { Injectable } from '@angular/core';
import { Rmf } from 'src/models/Rmf';
import {HttpClient} from '@angular/common/http'
import { IRmfService } from 'src/interfaces/IRmfService';
@Injectable({
    'providedIn': 'root'
})

export class RmfService implements IRmfService{
    constructor(private _httpCliente: HttpClient){       
    }
         calcularPercentual(rmf: Rmf): number {
            
            if(!rmf.altura) throw new Error ("preencha o campo altura corretamente")
            if(!rmf.cincunferenciaCintura) throw new Error ("preencha o campo cincunferenciaCintura corretamente")
            if(!rmf.genero) throw new Error ("preencha o campo genero corretamente")
            if(rmf.genero == 'M'){
                rmf.resultado = 64-(20*(rmf.altura/rmf.cincunferenciaCintura))
                rmf.resultado = parseFloat(rmf.resultado .toFixed(2))
                 
            }
            if(rmf.genero == 'F'){   
                rmf.resultado = 76-(20*(rmf.altura/rmf.cincunferenciaCintura))
                rmf.resultado = parseFloat(rmf.resultado .toFixed(2))
            }
                return rmf.resultado
            throw new Error('Method not implemented.');
         }
        }
