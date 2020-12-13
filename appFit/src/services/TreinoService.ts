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
        let treinoC = ['Agachamento 30 Segundos','Burpe 30 Segundos','Prancha Estatica 30 Segundos']
        let treinoB = ['Polichinelo 30 Segundos','Corrida Parada 30 Segundos','Flexão De Braço 30 Segundos']
        let treinoA = ['Frog 30 segundos','Alpinista 30 Segundos','Prancha Chute Lateral 30 Segundos']
        let numero = Math.floor(Math.random()*3)
        let numero2 = Math.floor(Math.random()*3)
        let numero3 = Math.floor(Math.random()*3)
        treino.treino1 = treinoC[numero]
        treino.treino2 = treinoB[numero2]
        treino.treino3 = treinoA[numero3]

        return treino.treino1, treino.treino2,treino.treino3
        throw new Error('Method not implemented.');
    }
    
}