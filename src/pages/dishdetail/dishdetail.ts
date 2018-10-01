import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dish} from'../../shared/dish'; 
import {Comment} from'../../shared/dish'; 

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

  dish:Dish;
  numComments:number;
  averageRat: string;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     ) 
     {
      this.dish = navParams.get('dish');
      this.numComments = this.dish.comment.length;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  ngOnInit(){
 
    }
}
