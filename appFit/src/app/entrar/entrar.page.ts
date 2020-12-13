import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/services/UsuarioService';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  public usuario : Usuario = new Usuario()

  constructor(private _usuarioService:UsuarioService) {
    
   }

  ngOnInit() {
  }
    registrar(){
      
      
      this._usuarioService.entrar(this.usuario);
      
  }

}
