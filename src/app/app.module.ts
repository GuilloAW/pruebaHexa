import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { TipoDePipe } from './pipes/tipo-de.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LetraABPipe } from './pipes/letra-ab.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component'


@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    TipoDePipe,
    LetraABPipe,
    MenuComponent,
    EjerciciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
