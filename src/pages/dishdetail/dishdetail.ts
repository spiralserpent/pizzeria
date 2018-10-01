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
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage implements OnInit{

  dishes:Dish[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dishService: DishProvider,
    ) {
  }
  getDishes(){
    this.dishService 
    .getDishes()
    .subscribe(
      response => {
        this.dishes=response;
        console.log(response);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  ngOnInit(){
    this.getDishes();
    }
}
