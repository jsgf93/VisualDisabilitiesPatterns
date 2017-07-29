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
  nuevoDeporte = {};
  deportes = [];
  disabledButtons = {
    NuevoDeporteFormSubmitButton: false
  };

  constructor() { }

  ngOnInit() {
  }

}
