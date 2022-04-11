//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

//Importar componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

//Array de rutas
//constante llamada tipo Routes
const appRoutes: Routes = [
    //ruta del navegador , el componente que se va a mostrar
    //el vacio es para que inicie con este componente y el home es uno que se creo normaalito...
    {path: ' ', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    //cuando no encuentra ninguno de los componentes, se ejecuta el componente que yo le diga
    //!Debe ser la ultima ruta en declararse o sino puede que hayan problemas...
    {path: '**', component: HomeComponent}
];

//Exportar el modulo del router 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> =   RouterModule.forRoot(appRoutes);