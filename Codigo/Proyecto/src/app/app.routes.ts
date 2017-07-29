import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RegistroComponent} from "./registro/registro.component";
import {CursoComponent} from "./curso/curso.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'curso', component: CursoComponent},
  //{path: 'listar-noticias', component: ListarNoticiasComponent},
  //{path: 'noticia/:idGrupo/materia', component: MateriaComponent},
  //{path: 'noticias', component: NoticiasComponent},
  //{path: 'deporte/:idDeporte/noticias', component: NoticiasComponent},
  //{path: 'listar-deporte/:idDeporte/noticias', component: NoticiasComponent},
  //{path: 'listar-noticias-deporte/:idDeporte/noticias', component: ListarNoticiasDeporteComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
