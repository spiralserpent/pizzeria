import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dish} from'../../shared/dish'; 
import {DishProvider} from '../../providers/dish/dish';
/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{

  dishes:Dish[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dishService: DishProvider,
    ) {
  }
  getProviderDishes(){
    this.dishService 
    .getDishes()
    .subscribe(
      response => {
        this.dishes=response;
        console.log(this.dishes);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit(){
    this.getProviderDishes();
    }
}
