import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "Bienvenido al ingreso del curso de ingles";
  usuario = {};
  usuarios = [];
  constructor(private _http: Http,
              private _masterURL: MasterUrlService){

  }
  ngOnInit() {
    this._http.get(this._masterURL.url + "Usuario")
      .subscribe(
        (res: Response) => {
          this.usuarios = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  loginUsuario(formulario: NgForm){
    let parametros ={
    cedula: formulario.value.cedula,
    contrasena: formulario.value.contrasena
    };
    console.log(parametros);

  }

}
