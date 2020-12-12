import { Injectable } from '@angular/core';
import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/usuario';
import {HttpClient} from '@angular/common/http'
@Injectable({
    'providedIn': 'root'
})

export class UsuarioService implements IUsuarioService{
    constructor(private _httpCliente: HttpClient){

    }
    entrar(usuario: Usuario): void {
        throw new Error('Method not implemented.');
    }

}