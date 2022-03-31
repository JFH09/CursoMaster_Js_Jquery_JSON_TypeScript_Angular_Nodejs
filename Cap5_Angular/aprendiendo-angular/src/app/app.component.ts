import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = ' Angular - aprendiendo-angular';
  public mostrarVideoJuegos: Boolean = true;
  

  ocultarVideoJuegos(valor: Boolean){
    this.mostrarVideoJuegos = valor;
  }


}
