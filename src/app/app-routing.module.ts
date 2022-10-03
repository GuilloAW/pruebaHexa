import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { JugadoresComponent } from "./pages/jugadores/jugadores.component";

const routes: Routes = [
  {
    path:"jugadores",
    component:JugadoresComponent
  },
  {
    path:"ejercicios",
    component:EjerciciosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
