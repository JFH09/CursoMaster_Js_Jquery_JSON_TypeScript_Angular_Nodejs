import { Component, OnInit, DoCheck, OnDestroy} from "@angular/core";

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;

    constructor(){ //Siempre es el primero en ejecutarse...
        this.titulo = "Componente de VideoJuegos desde el constructor...";
        this.listado = "Listado de los jugos mas populares...";
        console.log("Se cargo el componente : videojuego.component.ts");
    }

    ngOnInit(): void {
        console.log("OnInit Ejecutado..."); //Se ejecuta al incio de cargar la pagina
    }

    ngDoCheck(): void {
        console.log("DoCheck Ejecutado !"); //Se ejecuta cada vez que haya un cambio o pase algo en la app
    }

    ngOnDestroy(): void {
        console.log("OnDestroy Ejecutado"); // Antes de eliminar un componente
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo Asignado..."; 
    }
}