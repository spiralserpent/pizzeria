import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Dish} from'../../shared/dish';
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;


  constructor(public http: HttpClient) {
    this.favorites=[];
    console.log('Hello FavoriteProvider Provider');
  }
  addToFavorites(id:number): boolean{
    this.favorites.push(id); 
    return true;
  }
  isFavorite(id:number):boolean{
    return this.favorites.some(dish=>dish===id)
  }
  //some busca si existe este parametro que esta mandando el parametro
  //es como un for pero en vez de regresar algo se regresa true o false
  //y se regresa los que si cumplen con true

}
