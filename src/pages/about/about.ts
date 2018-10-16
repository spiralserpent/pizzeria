import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LeaderProvider} from '../../providers/leader/leader';
import {Leader} from'../../shared/leader'; 
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage implements OnInit{


  leaders: Leader[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private leaderService: LeaderProvider, @Inject('DbURL') private dbURL) {
  }

  getProviderLeaders(){
    this.leaderService 
    .getLeader()
    .subscribe(
      response => {
        this.leaders=response;
        console.log(this.leaders);
      }
    )
  }
 
    
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ngOnInit(){
    this.getProviderLeaders();
    }
}