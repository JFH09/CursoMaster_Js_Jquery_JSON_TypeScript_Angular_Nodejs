import { Component } from "@angular/core";

@Component({
    selector: "videojuego",
    template: `
        <h2>Componente de  VideoJuegos </h2>
        <ul>
            <li>GTA</li>
            <li>CRASH</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>
    `
})

export class VideojuegoComponent{
    constructor(){
        console.log("Se cargo el componente : videojuego.component.ts");
    }
}