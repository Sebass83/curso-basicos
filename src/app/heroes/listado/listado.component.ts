import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  })
export class ListadoComponent implements OnInit {
  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados?: string[]= [];
  heroeEliminado?:string=""

  borrarHeroe():void{
    this.heroeEliminado = this.heroes.pop();
    if(this.heroeEliminado){
      this.heroesBorrados?.push(this.heroeEliminado);
      console.log('Se ha eliminado a', this.heroeEliminado)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
