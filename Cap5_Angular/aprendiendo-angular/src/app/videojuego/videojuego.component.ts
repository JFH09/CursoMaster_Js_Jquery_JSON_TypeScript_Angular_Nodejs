import { Component } from "@angular/core";

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent{

    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de VideoJuegos desde el constructor...";
        this.listado = "Listado de los jugos mas populares...";
        console.log("Se cargo el componente : videojuego.component.ts");
    }
}