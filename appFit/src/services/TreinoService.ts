import { HttpClient } from '@angular/common/http';
import { ITreinoService } from 'src/interfaces/ITreinoService';
import { Injectable } from '@angular/core';
import { Treino } from 'src/models/Treino';
@Injectable({
    'providedIn': 'root'
})

export class TreinoService implements ITreinoService{
    constructor(private _httpCliente: HttpClient){
    }
    gerarTreino(treino: Treino): String {
        treino.resultado = treino.treino1
        return treino.resultado
        throw new Error('Method not implemented.');
    }
    
}