import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AuthService} from './services/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CursoComponent } from './curso/curso.component';
import {routing} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MasterUrlService} from "./services/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MasterUrlService,AUTH_PROVIDERS,AuthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
