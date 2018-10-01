import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DishProvider} from '../../providers/dish/dish';
import {PromotionProvider} from '../../providers/promotion/promotion';
import {LeaderProvider} from '../../providers/leader/leader';

import {Dish} from'../../shared/dish'; 
import {Promotion} from'../../shared/promotion'; 
import {Leader} from'../../shared/leader'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dish:Dish;

  constructor(  //nuestro constructor , en el estamos definiendo el dishService que es el dishProvider
    public navCtrl: NavController,
    private dishService: DishProvider,
    private leaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @Inject('DbURL') private dbURL

    ) 
    {

    }

    getFeaturedDish(){
      this.dishService //es una instancia del provider, el provider es dish provider
      .getFeaturedDish()
      .subscribe(
        response => {
          this.dish=response[0];
          console.log(this.dish);
        }
      )
    }
    getFeaturedLeader(){
      this.leaderService
      .getFeaturedLeader()
      .subscribe(
        response =>{
          this.leader= response[0];
        console.log(this.leader);
        }
      )
    }
    getFeaturedPromotion(){
      this.promotionService
      .getFeaturedPromotion()
      .subscribe(
        response =>{
          this.promotion= response[0];
        console.log(this.promotion);
        }
      )
    }
 
  ngOnInit(){
  this.getFeaturedDish();
  this.getFeaturedLeader();
  this.getFeaturedPromotion();
  }

}
