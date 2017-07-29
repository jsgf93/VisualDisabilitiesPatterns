import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  title: string = "Bienvenido a ingresar Deporte";
  nuevoUsuario = {};
  usuarios = [];
  disabledButtons = {
    NuevoUsuarioFormSubmitButton: false
  };
  constructor(private _http: Http,
              private _masterURL: MasterUrlService) { }

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

  crearUsuario(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevoUsuarioFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Usuario", {
      nombreUsuario: formulario.value.nombreUsuario,
      apellidoUsuario: formulario.value.apellidoUsuario,
      cedulaUsuario: formulario.value.cedulaUsuario,
      contrasenaUsuario: formulario.value.contrasenaUsuario,
      tipoUsuario: formulario.value.tipoUsuario,
    }).subscribe(
      (res) => {
        console.log("No hubo Errores la crear un usuario");
        console.log(res);
        this.usuarios.push(res.json());
        this.nuevoUsuario = {};
        this.disabledButtons.NuevoUsuarioFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevoUsuarioFormSubmitButton = false;
        console.log("Ocurrio un error al usuario", err);
      },
      () => {
        console.log("Done")
      }
    );
  }

  borrarDeporte(id: number) {
    this._http.delete(this._masterURL.url + "Usuario/" + id)
      .subscribe(
        (res) => {
          let deporteBorrado = res.json();
          this.usuarios = this.usuarios.filter(value => deporteBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarDeporte(usuario: any) {
    let parametos = {
      nombreUsuario: usuario.nombreUsuario
    };
    this._http.put(this._masterURL.url + "Usuario/" + usuario.id, parametos)
      .subscribe(
        (res: Response) => {
          usuario.formularioCerrado = !usuario.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }
}
