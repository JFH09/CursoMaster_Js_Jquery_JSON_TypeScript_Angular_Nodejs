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
    public marcas: string[];
    public config;
    public color: string;
    public nueva_marca: string;

    constructor(){
        this.nueva_marca = "Fila";
        this.color = "blue";
        this.zapatillas = [ 
            new Zapatilla("Nike Airmax", "Nike", "Negro", 160,   true),
            new Zapatilla("Reebook Classic", "Reebook", "Blanco", 80, true),
            new Zapatilla("Reebook Spartan", "Reebook", "Rojas", 140, false),
            new Zapatilla("Nike Runner", "Nike", "Negro", 60, true),
            new Zapatilla("Adidas Yezzy", "Adidas", "Gris", 180, false)
        ];
        this.config = configuracion;
        this.marcas = new Array();
    }

    ngOnInit(){
        console.log(this.zapatillas);  
        this.getMarcas(); 
    }

    getMarcas(){
        
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                console.log(zapatilla.marca);
                this.marcas.push(zapatilla.marca); 
            }
            
        });
        console.log(this.marcas);

    }


    getMarca(){
        alert(this.nueva_marca);
    }

    addMarca(){
        this.marcas.push(this.nueva_marca);
    }

 


    // constructor(){

    //     this.titulo = " Nuevo Componente - Zapatillas";
    //     console.log("Cargo el componente zapatillas.component.ts");
    // }
};