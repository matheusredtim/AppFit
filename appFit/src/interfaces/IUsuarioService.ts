import { Usuario } from 'src/models/usuario';

export interface IUsuarioService{
    entrar(usuario:Usuario): void
}