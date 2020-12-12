import { Treino } from 'src/models/Treino';

export interface ITreinoService {
    gerarTreino(treino:Treino): String
}