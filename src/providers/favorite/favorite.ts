import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Dish} from'../../shared/dish';
import {DishProvider} from'../../providers/dish/dish';
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;


  constructor(
    public http: HttpClient, 
    private dishService: DishProvider) {
    this.favorites=[];
    console.log('Hello FavoriteProvider Provider');
  }
  addToFavorites(id:number): boolean{
    if (!this.isFavorite(id)){this.favorites.push(id);}
    return true;
  }

  isFavorite(id:number):boolean{
    return this.favorites.some(dish=>dish===id)
  }

  //some busca si existe este parametro que esta mandando el parametro
  //es como un for pero en vez de regresar algo se regresa true o false
  //y se regresa los que si cumplen con true

  getFavorites(): Observable<Dish[]>{
    console.log(this.favorites);
    return this.dishService.getDishes().map(
      res => res.filter(dishes => this.favorites.some(dish => dish == dish.id))
    )
  }
/* seria un nuevo arreglo y lo filtra y manda lo necesario para compararlos y que funcionen*/

  deleteFavorites(id: number):Observable<Dish[]>{
    let index = this.favorites.indexOf(id); 
    /*el metodo indexOf() retorna el primer indice ne lqeu se puede encontrar
    un
    o returna 1 si elelemetno no esta presente
    referencia de mozzilla indexOf */   
  
    if (index >= 0) {
      this.favorites.splice(index,1);
      /*el metodo splice() cambia el contenido de un array elminando elementos existentes y
      se pueden reremplazar por otro
      mozilla referencia splice */
      return this.getFavorites();
    }else{
      console.log('No es favorito', id);
    }
  }

}
