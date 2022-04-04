import { Component, OnInit } from "@angular/core";
import { configuracion } from '../models/configuracion'
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: "zapatillas",
    templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent {

    public titulo: string = " Nuevo Componente - Zapatillas";
    public zapatillas:Array<Zapatilla>;
    public config;

    constructor(){
        this.zapatillas = [ 
            new Zapatilla("Reebook Classic", "Reebook", "Blanco", 80,   true),
            new Zapatilla("Nike Runner", "Nike", "Negro", 60,   true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false)
        ];
        this.config = configuracion;
    }

    ngOnInit(){
        console.log(this.zapatillas);   
    }

    // constructor(){

    //     this.titulo = " Nuevo Componente - Zapatillas";
    //     console.log("Cargo el componente zapatillas.component.ts");
    // }
};