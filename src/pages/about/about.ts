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

<<<<<<< HEAD

  leaders: Leader[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private leaderService: LeaderProvider, @Inject('DbURL') private dbURL) {
=======

  leaders:Leader[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private leaderService: LeaderProvider,
    @Inject('DbURL') private dbURL
    ) {
      
>>>>>>> d3738a6fd79a45b7133279fdb4dc00d8efeeaa51
  }
  getProviderLeader(){
    this.leaderService 
    .getLeader()
    .subscribe(
      response => {
        this.leaders=response;
        console.log(this.leaders);
      }
    )
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
    console.log('ionViewDidLoad aboutPage');
  }

  ngOnInit(){
<<<<<<< HEAD
    this.getProviderLeaders();
=======
    this.getProviderLeader();
>>>>>>> d3738a6fd79a45b7133279fdb4dc00d8efeeaa51
    }
}