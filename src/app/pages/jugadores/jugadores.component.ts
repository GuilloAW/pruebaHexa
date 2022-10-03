import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'
import { DataJugador } from "../../models/DataJugador";

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  contactForm!: FormGroup;
  jugadores:any=[];
  modelJugador?:DataJugador;
  editIdJugador?:number;
  constructor(private apiService:ApiService, private builder:FormBuilder, private http:HttpClient) { }
  ngOnInit(): void {
    this.apiService.getJugador()
    .subscribe(data =>{
      this.jugadores=data;
    });
    this.contactForm=this.initForm();
  }
  onSubmit():void{
    this.sumJugador(this.contactForm.value);
    this.clearForm();
  }
  initForm(): FormGroup{
    return this.builder.group({
      camiseta:['',Validators.required],
      campeonatos:['',Validators.required],
      codigo:['',Validators.required],
      codigoEquipo:['',Validators.required],
      idEquipo:['',Validators.required],
      idJugador:['',Validators.required],
      nombreEquipo:['',Validators.required],
      nombres:['',Validators.required]
    })
  }
  delJugador(idJugador:number):void{
    const nuevo= this.jugadores.filter( ({id}:any) => id !== idJugador);
    const result = this.jugadores.find( ({id}:any) => id === idJugador );
      this.http.delete('http://localhost:3000/jugadores/'+idJugador,result).subscribe(
        res=>{
          this.jugadores=nuevo;
        }
      )

  }
  sumJugador(data:[]):void{
      this.http.post('http://localhost:3000/jugadores',data
      ).subscribe(res =>{
        this.jugadores.push(res);
      }
      )
  }
  updtJugador(idJugador:number){
    const result = this.jugadores.find( ({id}:any) => id === idJugador );
    this.contactForm.patchValue({
      camiseta:result.camiseta ,
      campeonatos:result.campeonatos ,
      codigo:result.codigo ,
      codigoEquipo:result.codigoEquipo ,
      idEquipo:result.idEquipo ,
      idJugador:result.idJugador ,
      nombreEquipo:result.nombreEquipo ,
      nombres:result.nombres
    })
    this.editIdJugador=idJugador;
    const cambio = this.jugadores.map((p:any) =>
      p.id === idJugador
        ? { ...p, nombres: 'Ubuntu' }
        : p
    );
    console.log(cambio);
  }
  editJugador(){
    let data=this.contactForm.value;
    this.http.put('http://localhost:3000/jugadores/'+this.editIdJugador,data
    ).subscribe(res => {
      this.jugadores=this.jugadores
    })
    this.clearForm();
  }
  clearForm(){
    this.contactForm.patchValue({
      camiseta:"",
      campeonatos:"",
      codigo:"",
      codigoEquipo:"",
      idEquipo:"",
      idJugador:"",
      nombreEquipo:"",
      nombres:""
    })
  }
}
