import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url="http://localhost:3000/jugadores";
  constructor(private http: HttpClient) { }
  getJugador(){
    return this.http.get(this.url);
  }
}
