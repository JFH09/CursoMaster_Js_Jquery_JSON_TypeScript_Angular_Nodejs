import { Component } from '@angular/core';
import { configuracion } from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = ' Angular - aprendiendo-angular';
  public mostrarVideoJuegos: Boolean = true;
  public descripcion: string;
  public config;  
  constructor(){
    this.config = configuracion;
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    console.log("Utilizando import/export desde models (otra variable)... -> ",configuracion.color);
  }

  ocultarVideoJuegos(valor: Boolean){
    this.mostrarVideoJuegos = valor;
  }


}
