import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre: string;
  public followers: number;

  constructor(
    
    private _route: ActivatedRoute,
    private _router: Router
    

    
  ) { 
    this.nombre = "";
    this.followers = 0;
  }

  ngOnInit(): void {
    
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers']; //El mas es para convertirlo a number el followers que biene como string
      console.log(params);
      console.log(this.nombre +  " / " + typeof this.followers + " -> "+ this.followers);
    });
  }

}
